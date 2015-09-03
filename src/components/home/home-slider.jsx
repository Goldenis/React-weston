var React = require('react'),
  HomeSliderItem = require('./home-slider-item.jsx'),
  HomeSliderBullet = require('./home-slider-bullet.jsx'),
  {range} = require('../../lib/helpers');

require('./home-slider.styl');

var HomeSlider = React.createClass({
  getInitialState() {
    return {
      activeIndex: 0,
      sliderHeight: window.innerHeight,
      sliderWidth: window.innerWidth
    };
  },

  componentDidMount() {
    window.addEventListener('resize', this.changeSliderHeight);
    window.addEventListener('scroll', this.changeSliderPosition);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSliderHeight);
    window.removeEventListener('scroll', this.changeSliderPosition);
  },

  changeSliderHeight() {
    var width = window.innerWidth, height = window.innerHeight;

    if (this.state.sliderWidth !== width)
      this.setState({sliderHeight: height, sliderWidth: width});
  },

  changeSliderPosition() {
    var el = this.refs.wrapper.getDOMNode(), scalar = 500;
    if (window.scrollY > window.innerHeight + scalar && el.style.opacity !== 0) el.style.opacity = 0;
    else if (window.scrollY <= window.innerHeight + scalar && el.style.opacity !== 1) el.style.opacity = 1;
  },

  changeActiveIndex(index) {
    this.setState({activeIndex: index});
  },

  render() {
    var slides = this.props.slides,
      indexes = range(0, slides.length - 1);

    var slideItems = indexes.map(i => <HomeSliderItem key={i}
      activeSlide={this.state.activeIndex}
      index={i}
      {...slides[i]} />);

    var bullets = indexes.length > 1 ? indexes.map(i => <HomeSliderBullet key={i}
      index={i}
      activeSlide={this.state.activeIndex}
      onClick={this.changeActiveIndex} />) : null;

    return (
      <div className="home-slider" style={{height: this.state.sliderHeight, width: this.state.sliderWidth}}>
        <div ref="wrapper" className="home-slider__wrapper" style={{height: this.state.sliderHeight}}>
          <div className="home-slider__slides">{slideItems}</div>
          <div className="home-slider__bullets">{bullets}</div>
        </div>
      </div>
    );
  }
});

module.exports = HomeSlider;