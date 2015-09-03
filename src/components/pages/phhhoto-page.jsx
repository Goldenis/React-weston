var React = require('react'),
  PhhhotoPreview = require('../previews/phhhoto-preview.jsx'),
  Pages = require('./pages.jsx'),
  image = require('../images/phhhoto.png'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  Q = require('q'),
  {range} = require('../../lib/helpers');

function fetchPhhhotoItems() {
  return Q.fcall(() => {
    return {
      phhhoto: range(1, 14).map(i => ({id: i, img: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10852685_539756786160481_1693885865_s.jpg'}))
    }
  });
}

var PhhhotoPage = React.createClass({
  mixins: [asyncChangeRoute(fetchPhhhotoItems)],

  render() {
    var phhhoto = this.props.store.getStore().phhhoto.map(item => <PhhhotoPreview key={item.id} {...item} />);

    return (
      <Pages categoryImg={image}>
        <div className="pages__phhhoto-wrapper">
          {phhhoto}
        </div>
      </Pages>
    );
  }
});

module.exports = PhhhotoPage;