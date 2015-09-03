var React = require('react'),
  InstagramPreview = require('../previews/instagram-preview.jsx'),
  Pages = require('./pages.jsx'),
  image = require('../images/instagram.svg'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  Q = require('q'),
  {range, debounce} = require('../../lib/helpers'),
  fetchData = require('../../lib/fetchData'),
  getLogoMixin = require('../mixins/getLogoMixin');

function fetchInstagramItems() {
  return fetchData('/app/api/service/instagram').then(({data}) => {
    return Q.fcall(() => {
      return {
        instagram: data.data.filter(item => item.type === 'image').map(item => ({
          id: item.id,
          img: item.images['standard_resolution'].url,
          source: item.link
        })),

        nextId: data.pagination && data.pagination['next_max_id']
      };
    });
  });
}

var InstagramPage = React.createClass({
  mixins: [asyncChangeRoute(fetchInstagramItems), getLogoMixin('instagram')],

  getInitialState() {
    return {
      scrollable: true,
      doneScroll: false
    };
  },

  loadNext() {
    var storeData = this.props.store.getStore();
    this.setState({scrollable: false});

    if (storeData.nextId) {
      fetchData(`/app/api/service/instagram?max_id=${storeData.nextId}`).then(({data}) => {
        if (this.isMounted()) {
          this.props.store.setStore({
            instagram: storeData.instagram.concat(data.data.filter(item => item.type === 'image').map(item => ({
              id: item.id,
              img: item.images['standard_resolution'].url,
              source: item.link
            }))),

            nextId: data.pagination && data.pagination['next_max_id']
          });

          var state = {scrollable: true};
          if (!data.pagination) {
            state.doneScroll = true;
          }
          this.setState(state);
        }
      });
    }
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
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },

  render() {
    var instagram = this.props.store.getStore().instagram.map(item => <InstagramPreview key={item.id} {...item} />);

    return (
      <Pages categoryImg={image} categoryImgBg={this.state.logoUrl} infiniteScroll={!this.state.scrollable} stopped={this.state.doneScroll} meta={{title: 'Instagram'}}>
        <div className="pages__instagram-wrapper" ref="content">
          {instagram}
        </div>
      </Pages>
    );
  }
});

module.exports = InstagramPage;