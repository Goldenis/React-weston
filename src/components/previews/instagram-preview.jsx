var React = require('react');

require('./instagram-preview.styl');

var InstagramPreview = React.createClass({
  componentDidMount() {
    this.changeHeight();
    window.addEventListener('resize', this.changeHeight);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.changeHeight);
  },

  changeHeight() {
    var el = this.getDOMNode(),
      width = el.offsetWidth - 5;
    if (el.offsetHeight !== width)
      el.style.height = width + 'px';
  },

  showSource() {
    window.open(this.props.source, '', 'width=640,height=850');
  },

  render() {
    return (
      <div className="instagram-preview" onClick={this.showSource}>
        <div style={{backgroundImage: `url(${this.props.img})`}} className="instagram-preview__img" />
      </div>
    );
  }
});

module.exports = InstagramPreview;