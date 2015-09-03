var React = require('react'),
  {findWhere} = require('../../lib/helpers'),
  SinglePage = require('./single-page.jsx'),
  Newlines = require('../newlines.jsx'),
  Q = require('q'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  fetchData = require('../../lib/fetchData'),
  moment = require('moment'),
  path = require('path'),
  {Link} = require('react-router'),
  GallerySingle = require('./gallery-single.jsx'),
  StorySingle = require('./story-single.jsx');

function fetchPreviewItem(params) {
  return fetchData(`/app/api/posts/preview/${params.slug}`).then(({data: item}) => {
    console.log(item);
    return Q.fcall(() => {
      var category = item.category.slug;

      switch (category) {
        case 'gallery' :
          return {
            title: item.title,
            date: moment(item['create_date']).format('L'),
            preview: item.description,
            category,
            content: item.text,
            views: item.views,
            mode: item.ext && item.ext.mode,
            slides: item.ext && item.ext.gallery && item.ext.gallery.map(slide => ({
              id: slide.id,
              img: path.join(slide.content, slide.name)
            })),
            img: item.media ? path.join(item.media.content, item.media.name) : null,
            video: item.ext && item.ext.video,
            audio: item.ext && item.ext.audio
          };

        case 'stories' :
          return {
            title: item.title,
            content: item.text,
            preview: item.description,
            category,
            author: item.author,
            data: item['created_by'],
            views: item.views,
            img: item.media && path.join(item.media.content, item.media.name),
            ext: item.ext,
            media: item.media
          };
      }
    });
  });
}

var PreviewSingle = React.createClass({
  mixins: [asyncChangeRoute(fetchPreviewItem, transition => transition.redirect('/'))],

  componentDidMount() {
    setTimeout(() => this.iframeResize(), 0);
  },

  iframeResize() {
    var iframes = this.refs.content.getDOMNode().querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      var width = iframes[i].getAttribute('width');

      if (width) {
        iframes[i].parentNode.style.maxWidth = width + 'px';
      }
    }
  },

  render() {
    var Component = React.DOM.div;

    switch (this.props.store.getStore().category) {
      case 'gallery' :
        Component = GallerySingle;
        break;
      case 'stories' :
        Component = StorySingle;
        break;
    }

    return (
      <Component {...this.props} />
    );
  }
});

module.exports = PreviewSingle;