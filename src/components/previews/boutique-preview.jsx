var React = require('react');

require('./boutique-preview.styl');

var BoutiquePreview = React.createClass({
  render() {
    return (
      <a href={this.props.link} className="boutique-preview">
        <div className="boutique-preview__img">
          <img src={this.props.img} />
        </div>
        <div className="boutique-preview__content">
          <div className="boutique-preview__title">{this.props.title}</div>
          <div className="boutique-preview__text">{this.props.preview}</div>
        </div>
      </a>
    );
  }
});

module.exports = BoutiquePreview;