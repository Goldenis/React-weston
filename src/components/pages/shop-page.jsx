var React = require('react'),
  Pages = require('./pages.jsx'),
  image = require('../images/boutique.png'),
  {Link, RouteHandler} = require('react-router'),
  {findWhere} = require('../../lib/helpers'),
  fetchData = require('../../lib/fetchData'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  Q = require('q');

require('./shop-page.styl');

function fetchShop(params) {
  return Q.Promise((resolve, reject) => {
    var collections = fetchData('/app/api/service/shopify_query?custom_collections.json');
    var products = fetchData('/app/api/service/shopify_query?products.json');
    var collects = fetchData('/app/api/service/shopify_query?collects.json');

    return Q.all([collections, products, collects])
      .then(([collections, products, collects]) => {
        collections = collections.data['custom_collections'];
        products = products.data['products'];
        collects = collects.data['collects'];

        resolve({
          collections: collections.map(item => ({
            title: item.title,
            slug: item.title.replace(/\s/g, '-').toLowerCase(),
            id: item.id
          })),

          products: products.map(item => ({
            id: item.id,
            body: item['body_html'],
            title: item.title,
            img: item.image.src,
            category: findWhere({id: findWhere({'product_id': item.id}, collects)['collection_id']}, collections).title.replace(/\s/g, '-').toLowerCase()
          }))
        });
      }, reject);
  });
}

var ShopPage = React.createClass({
  mixins: [asyncChangeRoute(fetchShop)],

  render() {
    var data = this.props.store.getStore();
    var categories = data.collections.map(item => <Link className="shop-page__nav-item" key={item.id} to={`/shop/${item.slug}`}>{item.title}</Link>);

    return (
     <Pages categoryImg={image}>
       <div className="shop-page">
         <div className="shop-page__nav">
           <Link className="shop-page__nav-item" to="/shop">Featured</Link>
           <Link className="shop-page__nav-item" to="/shop/all">All</Link>
           {categories}
         </div>
         <div className="shop-page__content">
           <RouteHandler {...data} />
         </div>
       </div>
     </Pages>
    );
  }
});

module.exports = ShopPage;