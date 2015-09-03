var React = require('react'),
  {Link} = require('react-router'),
  {isMobile} = require('../../lib/helpers'),
  HomeSliderVideoIcon = require('../home/home-slider-video-icon.jsx');

require('./home-stories.styl');

var HomeStoriesPreview = React.createClass({
  denyTransition(e) {
    if (/^coming soon$/i.test(this.props.title)) e.preventDefault();
  },

  render() {
    var preview = this.props.preview ? <div className="home-stories__text">{this.props.preview}</div> : null;
    var author = this.props.author ? <div className="home-stories__author">by {this.props.author}</div> : null;
    var isVideo = this.props.ext && this.props.ext.video;

    return (
      <div className="home-stories">
        <Link className="home-stories__img-wrapper" to={`/stories/${this.props.slug}`} onClick={this.denyTransition}>
          <div style={{backgroundImage: `url(${this.props.img})`}} className="home-stories__img" />
          <img className="home-stories__img--mobile" src={this.props.img} />
          <div className="home-stories__video-icon">
            {isVideo && <HomeSliderVideoIcon color="#ffffff" />}
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = HomeStoriesPreview;