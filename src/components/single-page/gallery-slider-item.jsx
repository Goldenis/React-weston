var React = require('react'),
  Velocity = require('velocity-animate');

var GallerySliderItem = React.createClass({
  componentDidMount() {
    if (this.props.activeSlide !== this.props.index) {
      var el = this.getDOMNode();
      el.style.display = 'none';
      el.style.position = 'absolute';
      el.style.zIndex = 0;
    }
  },

  componentDidUpdate(prevProps) {
    var el = this.getDOMNode();

    Velocity(el, 'finish');

    if (this.props.activeSlide === this.props.index && prevProps.activeSlide !== this.props.index) {
      el.style.zIndex = 1;
      Velocity(el, {opacity: [1, 0]}, {display: 'block', duration: 1500, begin: () =>  el.style.position = 'absolute', complete: () =>  el.style.position = 'relative'});
    } else if (this.props.activeSlide !== this.props.index && prevProps.activeSlide === this.props.index) {
      el.style.zIndex = 0;
      Velocity(el, {opacity: 0}, {display: 'none', duration: 1500});
    }
  },

  render() {
    return (
      <!--<div className="gallery-slider__item" style={{backgroundImage: `url(${this.props.img})`}} />-->
      <div className="gallery-slider__item">
        <img src={this.props.img} />
      </div>
    );
  }
});

module.exports = GallerySliderItem;