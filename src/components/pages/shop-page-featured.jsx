var React = require('react'),
  {Link} = require('react-router');

var ShopPageFeatured = React.createClass({
  render() {
    var collections = this.props.collections.map(item => <div className="shop-page-featured__item" key={item.id}><Link className="shop-page-featured__item-text" to={`/shop/${item.slug}`}>{item.title}</Link></div>);

    return (
      <div className="shop-page-featured">
        {collections}
      </div>
    );
  }
});

module.exports = ShopPageFeatured;