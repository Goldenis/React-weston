var React = require('react'),
  Q = require('q'),
  fetchData = require('../../lib/fetchData'),
  Pages = require('./pages.jsx'),
  image = require('../images/music.svg'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  MusicPreview = require('../previews/music-preview.jsx'),
  moment = require('moment'),
  getLogoMixin = require('../mixins/getLogoMixin'),
  cameFrom = require('../../lib/cameFrom');

function fetchMusic() {
  return Q.Promise((resolve, reject) => {
    fetchData('/app/api/music').then(music => {
      resolve({
        music: music.data.map(item => ({
          id: item.id,
          title: item.name,
          slug: item.slug,
          date: moment(item['create_date']).format('L'),
          embed: item.content
        }))
      });
    }, reject);
  });
}

var MusicPage = React.createClass({
  mixins: [asyncChangeRoute(fetchMusic), getLogoMixin('music')],

  statics: {
    willTransitionFrom() {
      cameFrom.set('/music');
    }
  },

  componentDidMount() {
    var cfrom = cameFrom.get();

    if (cfrom.path === '/music') {
      setTimeout(() => window.scrollTo(0, cfrom.scroll), 0);
    }
  },

  render() {
    var music = this.props.store.getStore().music.map(item => (
      <div className="music-preview-wrapper" key={item.id}>
        <MusicPreview {...item} />
      </div>
    ));

    return (
      <Pages categoryImg={image} categoryImgBg={this.state.logoUrl} tinyContent={true} extra={true} meta={{title: 'Music'}}>
        {music}
      </Pages>
    );
  }
});

module.exports = MusicPage;