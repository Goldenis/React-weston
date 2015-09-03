var React = require('react'),
  GalleryPreview = require('../previews/gallery-preview.jsx'),
  Pages = require('./pages.jsx'),
  {partition} = require('../../lib/helpers'),
  image = require('../images/gallery.svg'),
  fetchData = require('../../lib/fetchData'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  Q = require('q'),
  moment = require('moment'),
  path = require('path'),
  getLogoMixin = require('../mixins/getLogoMixin'),
  cameFrom = require('../../lib/cameFrom');

function fetchGalleryItems() {
  return fetchData('/app/api/posts/list/gallery').then(({data: gallery, total}) => {
    return Q.fcall(() => {
      return {
        gallery: gallery.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          preview: item.description,
          ext: item.ext,
          img: item.media ? path.join(item.media.content, item.media.name) : null,
          date: moment(item['create_date']).format('L')
        })),

        total
      };
    });
  });
}

var GalleryPage = React.createClass({
  mixins: [asyncChangeRoute(fetchGalleryItems), getLogoMixin('gallery')],

  statics: {
    willTransitionFrom() {
      cameFrom.set('/gallery');
    }
  },

  getInitialState() {
    return {
      page: 2,
      scroll: true,
      stopScroll: false
    }
  },

  componentDidMount() {
    var cfrom = cameFrom.get();

    if (cfrom.path === '/gallery') {
      setTimeout(() => window.scrollTo(0, cfrom.scroll), 0);
    }

    this.props.store.onChange(this.changePage);
  },

  changePage() {
    if (this.state.stopScroll) {
      this.props.store.removeOnChange(this.changePage);
      return;
    }
    setTimeout(() => this.isMounted() && this.setState({page: this.state.page + 1, scroll: !this.state.stopScroll}), 0);
  },

  addGalleryItems() {
    var data = this.props.store.getStore();
    if (data.total > data.gallery.length) {
      this.setState({scroll: false});
      fetchData('/app/api/posts/list/gallery?page=' + this.state.page).then(({data, total}) => {
        if (data.length) {
          var store = this.props.store;
          var gallery = store.getStore().gallery.concat(data.map((item) => {
            return {
              id: item.id,
              title: item.title,
              slug: item.slug,
              preview: item.description,
              ext: item.ext,
              img: item.media ? path.join(item.media.content, item.media.name) : null,
              date: moment(item['create_date']).format('L')
            };
          }));

          store.setStore({
            gallery,
            total
          });

        } else {
          this.setState({scroll: false, stopScroll: true});
        }
      });
    }

  },

  render() {
    var data = this.props.store.getStore();
    var gallery = data.gallery ? data.gallery.map(item => <GalleryPreview key={item.id} {...item} />) : null;

    return (
      <Pages categoryImg={image} categoryImgBg={this.state.logoUrl} infiniteScroll={this.state.scroll} onScroll={this.addGalleryItems} stopped={this.state.stopScroll} meta={{title: 'Gallery'}}>
        {gallery}
      </Pages>
    );
  }
});

module.exports = GalleryPage;