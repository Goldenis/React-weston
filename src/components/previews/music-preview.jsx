var React = require('react'),
  {Link} = require('react-router');

require('./music-preview.styl');

var MusicPreview = React.createClass({
  render() {
    return (
      <div className="music-preview">
        <div className="music-preview__embed" dangerouslySetInnerHTML={{__html: this.props.embed}} />
        <Link to={`/music/${this.props.slug}`} className="music-preview__title">{this.props.title}</Link>
        <div className="music-preview__date">{this.props.date}</div>
      </div>
    );
  }
});

module.exports = MusicPreview;