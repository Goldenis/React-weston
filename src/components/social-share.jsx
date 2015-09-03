var React = require('react'),
  path = require('path'),
  changeMeta = require('../lib/changeMeta');

require('./social-share.styl');

var SocialShare = React.createClass({
  onFacebook(e) {
    e.preventDefault();
    var {title, image, url, content} = changeMeta.get();
    console.log(image);

    window.FB && window.FB.ui({
      method: 'feed',
      name: title,
      link: url,
      picture: image,
      caption: content
    }, res => {});
  },

  render() {
    var {title, image, url, content} = changeMeta.get();

    return (
      <div className="social-share">
        <a className="social-share__item social-share__item--twitter twitter-share-button" href={`https://twitter.com/share?url=${url}&text=${encodeURIComponent(title)}`} target="_blank"></a>
        <a className="social-share__item social-share__item--facebook" href="#" onClick={this.onFacebook}></a>
        <a className="social-share__item social-share__item--tumbler" href={`http://www.tumblr.com/share/link?url=${url}&name=${encodeURIComponent(title)}&description=${encodeURIComponent(content)}`} title="Share on Tumblr" target="_blank"></a>
        <a className="social-share__item social-share__item--pinterest" href={`https://www.pinterest.com/pin/create/button/?url=${url}&media=${image}`} target="_blank"></a>
        <a className="social-share__item social-share__item--mail" href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}></a>
      </div>
    );
  }
});

module.exports = SocialShare;