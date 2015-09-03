var React = require('react'),
  Pages = require('./pages.jsx'),
  {partition, debounce} = require('../../lib/helpers'),
  StoriesPreview = require('../previews/stories-preview.jsx'),
  image = require('../images/stories.svg'),
  asyncRouteChange = require('../mixins/asyncChangeRoute'),
  fetchData = require('../../lib/fetchData'),
  Q = require('q'),
  path = require('path'),
  getLogoMixin = require('../mixins/getLogoMixin'),
  cameFrom = require('../../lib/cameFrom');

function fetchStories() {
  return fetchData('/app/api/posts/list/stories').then(({data: stories}) => {
    return Q.fcall(() => {
      return {
        stories: stories.map((story) => ({
          id: story.id,
          title: story.title,
          slug: story.slug,
          preview: story.description,
          img: story.media && path.join(story.media.content, story.media.thumbnail),
          author: story.author,
          ext: story.ext,
          media: story.media
        }))
      }
    });
  });
}

var StoriesPage = React.createClass({
  mixins: [asyncRouteChange(fetchStories), getLogoMixin('stories')],

  statics: {
    willTransitionFrom() {
      cameFrom.set('/stories');
    }
  },

  getInitialState() {
    return {
      scrollable: true,
      doneScroll: false
    };
  },

  _page: 1,

  loadNext() {
    var storeData = this.props.store.getStore();
    this.setState({scrollable: false});

    this._page++;

    fetchData(`/app/api/posts/list/stories?page=${this._page}`).then(({data: stories}) => {
      if (this.isMounted()) {
        var state = { scrollable: true };

        if (!stories.length) {
          state.doneScroll = true;
        } else {
          this.props.store.setStore({
            stories: stories.map((story) => ({
              id: story.id,
              title: story.title,
              slug: story.slug,
              preview: story.description,
              img: story.media && path.join(story.media.content, story.media.thumbnail),
              author: story.author,
              ext: story.ext,
              media: story.media
            }))
          });
        }

        this.setState(state);
      }
    });
  },

  onScroll: debounce(function() {
    if (this.isMounted() && this.state.scrollable && !this.state.doneScroll) {
      var content = this.refs.content.getDOMNode(),
        {top, height} = content.getBoundingClientRect();

      if (window.innerHeight > (top + height)) {
        this.loadNext();
      }
    }
  }),

  componentDidMount() {
    var cfrom = cameFrom.get();

    if (cfrom.path === '/stories') {
      setTimeout(() => window.scrollTo(0, cfrom.scroll), 0);
    }

    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },

  render() {
    var stories = this.props.store.getStore().stories.map(item => <StoriesPreview key={item.id} {...item} />);

    return (
      <Pages categoryImg={image} categoryImgBg={this.state.logoUrl} extra={true} meta={{title: "Stories"}} infiniteScroll={!this.state.scrollable} stopped={this.state.doneScroll}>
        <div className="pages__stories-wrapper" ref="content">
          {stories}
        </div>
      </Pages>
    );
  }
});

module.exports = StoriesPage;