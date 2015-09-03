var React = require('react'),
  Router = require('react-router'),
  {Link} = Router,
  resizeIframeMixin = require('../mixins/resizeIframeMixin'),
  path = require('path'),
  replacePostMixin = require('../mixins/replacePostMixin'),
  {isMobile} = require('../../lib/helpers'),
  cameFrom = require('../../lib/cameFrom'),
  enableDisqus = require('../../lib/disqus'),
  changeMeta = require('../../lib/changeMeta');

require('./single-page.styl');

var SinglePage = React.createClass({
  mixins: [replacePostMixin, resizeIframeMixin],

  getInitialState() {
    return {
      backClicked: false
    }
  },

  changeMeta() {
    changeMeta({
      title: this.props.meta.title,
      content: this.props.meta.content,
      image: this.props.meta.image
    });
  },

  componentDidMount() {
    this.changeMeta();

    if (this.refs.comments) {
      enableDisqus({
        shortname: 'wjp',
        title: document.title,
        url: window.location.href,
        identifier: document.title
      });
    }
  },

  componentDidUpdate() {
    this.resizeIframe();
    this.changeMeta();
    if (this.refs.volume) this.refs.volume.getDOMNode().className = 'single-page__volume';
    if (this.refs.audio) {
      var audio = this.refs.audio.getDOMNode();
      if (audio.paused) audio.load();
    }
    if (this.refs.comments) {
      setTimeout(() => this.isMounted() && enableDisqus({
        shortname: 'wjp',
        title: document.title,
        url: window.location.href,
        identifier: window.location.href
      }), 0);
    }
  },

  componentWillUpdate(nextProps) {
    if (this.refs.audio && this.props.audio !== nextProps.audio) {
      var audio = this.refs.audio.getDOMNode();
      audio.pause();
    }
  },

  back(e) {
    if (!this.state.backClicked) {
      e.preventDefault();
      this.transitionTo(cameFrom.get().path);
      this.setState({backClicked: cameFrom.get().path});
    }
  },

  toggleAudio() {
    var audio = this.refs.audio.getDOMNode();
    var volumeButton = this.refs.volume.getDOMNode();
    var volume = audio.volume;

    volumeButton.className = volume ? 'single-page__volume single-page__volume--muted' : 'single-page__volume';
    audio.volume = volume ? 0 : 1;
  },

  render() {
    var prev = this.props.prev ? <a onClick={this.changePost} href={path.join(this.props.categoryLink, this.props.prev.slug)} className="single-page__prev" /> : null;
    var next = this.props.next ? <a onClick={this.changePost} href={path.join(this.props.categoryLink, this.props.next.slug)} className="single-page__next" /> : null;
    var contentStyle = 'single-page__content';

    if (this.props.tiny) contentStyle += ' single-page__content--tiny';

    return (
      <div className="single-page">
        <div className="single-page__header">
          <a onClick={this.back} className="single-page__close" />
          <div className="single-page__wjp"></div>
          <div className="single-page__arrows">
            {prev}
            {next}
          </div>
          {!isMobile() && this.props.audio && (this.props.audio.mp3 || this.props.audio.ogg) && (
            <div>
              <audio ref="audio" autoPlay={true} className="single-page__audio">
                <source type="audio/mpeg" src={this.props.audio.mp3} />
                <source type="audio/ogg" src={this.props.audio.ogg} />
              </audio>
              <a ref="volume" className="single-page__volume" onClick={this.toggleAudio}></a>
            </div>
          )}
          {false && this.props.views && <div className="single-page__views">
            <div className="single-page__views-count">{this.props.views}</div>
            <div className="single-page__views-icon"></div>
          </div>}
        </div>
        <div className={contentStyle}>{this.props.children}</div>
        <div className="single-page__comments" ref="comments">
          <div id="disqus_thread" className="single-page__comments-inner"></div>
        </div>
        {this.props.nextPostComponent && this.props.nextPostComponent}
      </div>
    );
  }
});

module.exports = SinglePage;