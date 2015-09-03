var React = require('react'),
  Router = require('react-router'),
  DataStore = require('../../lib/DataStore'),
  {findWhere} = require('../../lib/helpers');

var ShopPageCategory = React.createClass({
  mixins: [Router.State],

  statics: {
    willTransitionTo(transition, params) {
      if (params.category !== 'all') {
        if (!findWhere({slug: params.category}, DataStore.getStore().collections)) {
          transition.redirect('/shop');
        }
      }
    }
  },

  render() {
    var products = this.props.products
      .filter(item => {
        var category = this.getParams().category;
        return category === 'all' || category === item.category;
      })
      .map(item => <div className="shop-page-category__item" key={item.id}>
        <div className="shop-page-category__item-image" style={{backgroundImage: `url(${item.img})`}}></div>
        <div className="shop-page-category__item-title">{item.title}</div>
      </div>);

    return (
      <div className="shop-page-category">
        {products}
      </div>
    );
  }
});

module.exports = ShopPageCategory;