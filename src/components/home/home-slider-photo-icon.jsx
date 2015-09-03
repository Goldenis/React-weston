var React = require('react');

var HomeSliderPhotoIcon = React.createClass({
  render() {
    return (
      <svg version="1.1" x="0px" y="0px" width="8" height="14" viewBox="0 0 4.8 9.1" enable-background="new 0 0 4.8 9.1" fill={this.props.color} style={{position: 'relative', left: 18, top: 1}}>
        <path d="M4.3,4.8L0,0.5L0.5,0l4.3,4.3L4.3,4.8L4.3,4.8z M0.5,9.1L0,8.6l4.3-4.3l0.5,0.5L0.5,9.1L0.5,9.1z"></path>
      </svg>
    );
  }
});

module.exports = HomeSliderPhotoIcon;