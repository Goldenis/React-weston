var React = require('react');

var VideoBlock = React.createClass({
  getInitialState() {
    return {status: false, loaded: false};
  },

  componentDidMount() {
    var video = this.refs.video.getDOMNode().querySelector('iframe');

    if (video) {
      var src = video.getAttribute('src').split('?')[0];

      if (/\/\/player\.vimeo\.com/.test(src)) {
        video.onload = () => {
          this.setState({loaded: true});
          this.onScroll();
          window.addEventListener('scroll', this.onScroll);
        };
      }
    }
  },

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.video !== this.props.video || nextState.status !== nextState.status;
  },

  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      var video = this.refs.video.getDOMNode().querySelector('iframe');
      this.setState({status: false, loaded: false});
      video.onload = () => {
        this.setState({loaded: true});
        this.onScroll();
      }
    }
  },

  onScroll() {
    if (this.isMounted()) {
      if (this.state.loaded) {
        var video = this.refs.video.getDOMNode().querySelector('iframe');
        if (video) {
          var src = video.getAttribute('src').split('?')[0];
          var url = 'http:' + video.getAttribute('src').split('?')[0];
          var {top, height} = video.getBoundingClientRect();
          var videoVisible = (height / 2 + top >= 0) && ((top + height) <= window.innerHeight);

          if (!this.state.status && videoVisible) {
            video.contentWindow.postMessage(JSON.stringify({method: 'play'}), url);
            this.setState({status: true});
          } else if (this.state.status && !videoVisible) {
            video.contentWindow.postMessage(JSON.stringify({method: 'pause'}), url);
            this.setState({status: false});
          }
        }
      } else {
        window.removeEventListener('scroll', this.onScroll);
      }
    } else {
      window.removeEventListener('scroll', this.onScroll);
    }
  },

  render() {
    return (
      <div style={{lineHeight: 0}} dangerouslySetInnerHTML={{__html: this.props.video}} ref="video" />
    );
  }
});

module.exports = VideoBlock;