var React = require('react');

require('./phhhoto-preview.styl');

var PhhhotoPreview = React.createClass({
  render() {
    return (
      <div className="phhhoto-preview">
        <div style={{backgroundImage: `url(${this.props.img})`}} className="phhhoto-preview__img" />
      </div>
    );
  }
});

module.exports = PhhhotoPreview;