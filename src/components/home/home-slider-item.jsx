var React = require('react'),
  {Link} = require('react-router'),
  Velocity = require('velocity-animate'),
  HomeSliderVideoIcon = require('./home-slider-video-icon.jsx'),
  HomeSliderPhotoIcon = require('./home-slider-photo-icon.jsx'),
  path = require('path'),
  {isMobile} = require('../../lib/helpers');

var CHANGE_SLIDE_SPEED = 1500;

var HomeSliderItem = React.createClass({
  componentDidMount() {
    if (this.props.activeSlide !== this.props.index) {
      var el = this.getDOMNode();
      el.style.display = 'none';
      el.style.zIndex = 0;
    }
  },

  componentDidUpdate(prevProps) {
    var el = this.getDOMNode();

    Velocity(el, 'finish');

    if (this.props.activeSlide === this.props.index && prevProps.activeSlide !== this.props.index) {
      Velocity(el, {opacity: 1, zIndex: 1}, {display: 'block', duration: CHANGE_SLIDE_SPEED});
    } else if (this.props.activeSlide !== this.props.index && prevProps.activeSlide === this.props.index) {
      Velocity(el, {opacity: 0, zIndex: 0}, {display: 'none', duration: CHANGE_SLIDE_SPEED});
    }
  },

  render() {
    var component = this.props.ext && this.props.ext.video && (this.props.ext.video.mp4 || this.props.ext.video.ogv) && !isMobile() ? <VideoSlide {...this.props} /> : <ImageSlide {...this.props} />;

    return (
      <div className="home-slider__item">
        {component}
      </div>
    );
  }
});

var ImageSlide = React.createClass({
  componentDidMount() {
    if (this.props.activeSlide !== this.props.index) {
      var content = this.refs.content.getDOMNode();
      content.style.opacity = 0;
    }
  },

  componentDidUpdate(prevProps) {
    var content = this.refs.content.getDOMNode();

    Velocity(content, 'finish');

    if (this.props.activeSlide === this.props.index && prevProps.activeSlide !== this.props.index) {
      Velocity(content, {opacity: [1, 0]}, {duration: CHANGE_SLIDE_SPEED / 2, delay: CHANGE_SLIDE_SPEED});
    } else if (this.props.activeSlide !== this.props.index && prevProps.activeSlide === this.props.index) {
      Velocity(content, {opacity: 0}, { duration: CHANGE_SLIDE_SPEED});
    }
  },

  render() {
    var icon = this.props.linkType === 'photo' ? <HomeSliderPhotoIcon color={this.props.linkColor} /> : <HomeSliderVideoIcon color={this.props.linkColor} />;
    var img = '';

    try {
      img = path.join(this.props.media.content, this.props.media.name);
    } catch(e) {}

    return (
      <div className="home-slider__image-type">
        <div className="home-slider__image" style={{backgroundImage: `url(${img})`}} />
        <div ref="content" className={`home-slider__content home-slider__content--${this.props.align}`}>
          <CategoryComponent className="home-slider__category" color={this.props.categoryColor} text={this.props.category} />
          <a href={this.props.linkUrl} className="home-slider__title" style={{color: this.props.titleColor}} dangerouslySetInnerHTML={{__html: this.props.title}}></a>
          <div className="home-slider__text" style={{color: this.props.textColor}} dangerouslySetInnerHTML={{__html: this.props.text}} />
          <div className="home-slider__bottom-text" style={{color: this.props.authorColor}}>by {this.props.author}</div>
          <a href={this.props.linkUrl} className="home-slider__link" style={{color: this.props.linkColor}}>{this.props.linkText} {icon}</a>
        </div>
      </div>
    );
  }
});

var VideoSlide = React.createClass({
  render() {
    var icon = this.props.linkType === 'photo' ? <HomeSliderPhotoIcon color={this.props.linkColor} /> : <HomeSliderVideoIcon color={this.props.linkColor} />;
    var video = this.props.ext.video;

    return (
      <div className="home-slider__video-type">
        <video className="home-slider__video-item" autoPlay={true} loop={true}>
          <source src={video.mp4} type="video/mp4" />
          <source src={video.ogv} type="video/ogv" />
        </video>
        <div ref="content" className={`home-slider__content home-slider__content--${this.props.align}`}>
          <CategoryComponent className="home-slider__category" color={this.props.categoryColor} text={this.props.category} />
          <a href={this.props.linkUrl} className="home-slider__title" style={{color: this.props.titleColor}} dangerouslySetInnerHTML={{__html: this.props.title}}></a>
          <div className="home-slider__text" style={{color: this.props.textColor}} dangerouslySetInnerHTML={{__html: this.props.text}}></div>
          <div className="home-slider__bottom-text" style={{color: this.props.authorColor}}>by {this.props.author}</div>
          <a href={this.props.linkUrl} className="home-slider__link" style={{color: this.props.linkColor}}>{this.props.linkText} {icon}</a>
        </div>
      </div>
    );
  }
});

var CategoryComponent = React.createClass({
  render() {
    var href = '/';

    switch (this.props.text.toLowerCase()) {
      case 'stories' :
        href = '/stories';
        break;
      case 'gallery' :
        href = '/gallery';
        break;
      case 'music' :
        href = '/music';
        break;
      case 'instagram' :
        href = '/instagram';
        break;
    }

    return (
      <Link className={this.props.className} style={{color: this.props.color}} to={href}>
        {this.props.text}
      </Link>
    );
  }
});

module.exports = HomeSliderItem;