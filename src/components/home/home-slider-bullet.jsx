var React = require('react');

var HomeSliderBullet = React.createClass({
  getDefaultProps() {
    return {
      active: false
    }
  },

  render() {
    var bulletClassName = 'home-slider__bullet';
    bulletClassName += this.props.activeSlide === this.props.index ? ' home-slider__bullet--active' : '';

    return (
      <div onClick={this.onClick} className={bulletClassName} />
    );
  },

  onClick() {
    this.props.onClick(this.props.index);
  }
});

module.exports = HomeSliderBullet;