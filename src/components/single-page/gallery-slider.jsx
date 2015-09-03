var React = require('react'),
  {range} = require('../../lib/helpers'),
  GallerySliderItem = require('./gallery-slider-item.jsx'),
  GallerySliderBullet = require('./gallery-slider-bullet.jsx');

require('./gallery-slider.styl');

var GallerySlider = React.createClass({
  getInitialState() {
    return {
      activeIndex: 0,
      changable: true,
      swipable: true,
      initTouch: 0
    }
  },

  timeout: null,

  componentDidMount() {
    this.changeActiveIndexByTime();
    window.addEventListener('scroll', this.scrollBullets);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollBullets);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.changable || nextState.changable || this.props.slides !== nextProps.slides;
  },

  initialTouch(e) {
    this.setState({initTouch: e.touches[0].clientX, swipable: true});
  },

  middleTouch(e) {
    var middleTouch = e.touches[0].clientX, resultTouch = this.state.initTouch - middleTouch, dist = 20;

    if (this.state.swipable) {
      if (resultTouch < -dist)  this.changeActiveIndex(this.state.activeIndex + 1);
      else if (resultTouch > dist) this.changeActiveIndex(this.state.activeIndex - 1);
    }
  },

  componentDidUpdate(prevProps) {
    this.changeActiveIndexByTime();
    this.scrollBullets();

    if (this.props.slides !== prevProps.slides) this.setState({
      activeIndex: 0,
      changable: true,
      swipable: true,
      initTouch: 0
    });
  },

  changeActiveIndex(index) {
    clearTimeout(this.timeout);
    if (this.state.changable) {
      if (index >= this.props.slides.length) index = 0;
      else if (index < 0) index = this.props.slides.length - 1;
      this.setState({activeIndex: index, changable: false, swipable: false});
      setTimeout(() => this.setState({changable: true}), 1500);
    }
  },

  changeActiveIndexByTime() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.isMounted()) {
        var index = this.state.activeIndex + 1;
        this.changeActiveIndex(index);
      }
    }, 5000);
  },

  scrollBullets() {
    var bullets = this.refs.bullets.getDOMNode(),
      slider = this.refs.slider.getDOMNode(),
      {top, height} = slider.getBoundingClientRect();

    console.log(top, height)

    if (this.props.mode == 1) {
      bullets.style.bottom = Math.max(15, height - (window.innerHeight - top)) + 'px';
    } else {
     bullets.style.bottom = null;
    }
  },

  render() {
    var slides = this.props.slides,
      indexes = range(0, slides.length-1);

    var items = indexes.map(i => <GallerySliderItem key={slides[i].img}
      index={i}
      activeSlide={this.state.activeIndex}
      img={slides[i].img} />);

    var bullets = indexes.map(i => <GallerySliderBullet key={i}
      index={i}
      activeSlide={this.state.activeIndex}
      onClick={this.changeActiveIndex} />);

    return (
      <div className="gallery-slider" ref="slider">
        <div className="gallery-slider__content" onTouchMove={this.middleTouch} onTouchStart={this.initialTouch}>
          {items}
        </div>
        <div className="gallery-slider__bullets" ref="bullets">
          {bullets.length > 1 && bullets}
        </div>
      </div>
    );
  }
});

module.exports = GallerySlider;