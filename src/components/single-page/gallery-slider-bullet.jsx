var React = require('react');

var GallerySliderBullet = React.createClass({
  getDefaultProps() {
    return {
      active: false
    }
  },

  render() {
    var bulletClassName = 'gallery-slider__bullet';
    bulletClassName += this.props.activeSlide === this.props.index ? ' gallery-slider__bullet--active' : '';

    return (
      <div onClick={this.onClick} className={bulletClassName} />
    );
  },

  onClick() {
    this.props.onClick(this.props.index);
  }
});

module.exports = GallerySliderBullet;