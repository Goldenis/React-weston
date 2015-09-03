var React = require('react'),
  fetchData = require('../../lib/fetchData'),
  Router = require('react-router'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  Q = require('q'),
  moment = require('moment'),
  path = require('path'),
  HomeSection = require('../home/home-section.jsx'),
  Gallery = require('../previews/gallery-preview.jsx'),
  Stories = require('../previews/stories-preview.jsx'),
  Music = require('../previews/music-preview.jsx'),
  cameFrom = require('../../lib/cameFrom'),
  url = require('url'),
  changeMeta = require('../../lib/changeMeta');

require('./search-page.styl');
require('../home/home.styl');

function fetchSearch(params, query) {
  return Q.Promise((resolve, reject) => {
    if (!query.s) return reject();
    fetchData(`/app/api/posts/search?s=${query.s}`).then(({data}) => {
      var stories = data.filter(item => item.category && item.category.slug === 'stories');
      var gallery = data.filter(item => item.category && item.category.slug === 'gallery');
      var audio = data.filter(item => item.type === 'audio');

      resolve({
        success: data.length > 0,

        stories: stories.length > 0 && stories.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          preview: item.description,
          ext: item.ext,
          img: item.media ? path.join(item.media.content, item.media.name) : null,
          author: item.author,
          media: item.media
        })),

        gallery: gallery.length > 0 && gallery.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          preview: item.description,
          ext: item.ext,
          img: item.media ? path.join(item.media.content, item.media.name) : null,
          date: moment(item['create_date']).format('L')
        })),

        audio: audio.length > 0 && audio.map(item => ({
          id: item.id,
          title: item.name,
          slug: item.slug,
          embed: item.content,
          date: moment(item['create_date']).format('L')
        }))
      });
    }, reject)
  });
}

var SearchPage = React.createClass({
  mixins: [asyncChangeRoute(fetchSearch), Router.State],

  changeQuery() {
    this._query = url.parse(window.location.href, true).query;
  },

  changeMeta() {
    changeMeta({
      title: 'Search: ' + (this._query ? this._query.s : '')
    });
  },

  componentDidUpdate() {
    this.changeQuery();
    this.changeMeta();
  },

  componentDidMount() {
    var cfrom = cameFrom.get();

    if (/\/search\?s=.+/.test(cfrom.path)) {
      setTimeout(() => window.scrollTo(0, cfrom.scroll), 0);
    }

    this.changeQuery();
    this.changeMeta();
    this.changeScroll();
    window.addEventListener('scroll', this.changeScroll);
  },

  changeScroll() {
    cameFrom.set('/search?s=' + this._query.s);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScroll);
  },

  render() {
    var data = this.props.store.getStore();

    var storiesSection = data.stories && (
        <HomeSection title={`${data.stories.length} result${data.stories.length > 1 ? 's' : ''} in stories`}>
          {data.stories.map(item => <Stories key={item.id} {...item} />)}
        </HomeSection>
      );

    var gallerySection = data.gallery && (
        <HomeSection title={`${data.gallery.length} result${data.gallery.length > 1 ? 's' : ''} in gallery`}>
          {data.gallery.map(item => <Gallery key={item.id} {...item} />)}
        </HomeSection>
      );

    var audioSection = data.audio && (
        <HomeSection tiny={true} title={`${data.audio.length} result${data.audio.length > 1 ? 's' : ''} in audio`}>
          {data.audio.map(item => <Music key={item.id} {...item} />)}
        </HomeSection>
      );

    return (
      <div className="search-page">
        <div className="search-page__head">
          <div className="search-page__result-text">{data.stories || data.gallery || data.audio ? 'Search Results: ' + this.getQuery().s : 'No results'}</div>
          <div className="search-page__head-text"></div>
        </div>
        <div className="search-page__content">
          {storiesSection}
          {gallerySection}
          <div className="home__sections home__sections--tiny">
            {audioSection}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchPage;