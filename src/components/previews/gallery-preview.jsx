var React = require('react'),
  Newlines = require('../newlines.jsx'),
  {Link} = require('react-router'),
  HomeSliderVideoIcon = require('../home/home-slider-video-icon.jsx');

require('./gallery-preview.styl');

var GalleryPreview = React.createClass({
  render() {
    var preview = this.props.preview ? (
      <div className="gallery-preview__text">
        <Newlines text={this.props.preview.split('\n').slice(0,4).join('\n')} />
      </div>) : null;
    var isVideo = this.props.ext && this.props.ext.video;

    return (
      <div className="gallery-preview">
        <Link className="gallery-preview__img-wrapper" to={`/gallery/${this.props.slug}`}>
          <div style={{backgroundImage: `url(${this.props.img})`}} className="gallery-preview__img" />
          <img className="gallery-preview__img--mobile" src={this.props.img} />
          <div className="gallery-preview__video-icon">
            {isVideo && <HomeSliderVideoIcon color="#ffffff" />}
          </div>
        </Link>
        <div className="gallery-preview__content">
          <Link to={`/gallery/${this.props.slug}`} className="gallery-preview__title">{this.props.title}</Link>
          {preview}
          <div className="gallery-preview__date">{this.props.date}</div>
        </div>
      </div>
    );
  }
});

module.exports = GalleryPreview;