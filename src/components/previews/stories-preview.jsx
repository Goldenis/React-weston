var React = require('react'),
  {Link} = require('react-router'),
  {isMobile} = require('../../lib/helpers'),
  HomeSliderVideoIcon = require('../home/home-slider-video-icon.jsx');

require('./stories-preview.styl');

var StoriesPreview = React.createClass({
  denyTransition(e) {
    if (/^coming soon$/i.test(this.props.title)) e.preventDefault();
  },

  render() {
    var preview = this.props.preview ? <div className="stories-preview__text">{this.props.preview}</div> : null;
    var author = this.props.author ? <div className="stories-preview__author">by {this.props.author}</div> : null;
    var isVideo = this.props.ext && this.props.ext.video;

    return (
      <div className="stories-preview">
        <Link className="stories-preview__img-wrapper" to={`/stories/${this.props.slug}`} onClick={this.denyTransition}>
          <div style={{backgroundImage: `url(${this.props.img})`}} className="stories-preview__img" />
          <img className="stories-preview__img--mobile" src={this.props.img} />
          <div className="stories-preview__video-icon">
            {isVideo && <HomeSliderVideoIcon color="#ffffff" />}
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = StoriesPreview;