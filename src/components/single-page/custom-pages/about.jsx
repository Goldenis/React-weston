var React = require('react'),
  fetchData = require('../../../lib/fetchData'),
  DataStore = require('../../../lib/DataStore'),
  SinglePage = require('../single-page.jsx'),
  headerMixin = require('../../mixins/headerMixin'),
  SocialShare = require('../../social-share.jsx'),
  path = require('path'),
  asyncChangeRoute = require('../../mixins/asyncChangeRoute'),
  Q = require('q'),
  addPromise = Q.defer();

require('./about.styl');

function fetch() {
  return fetchData('/app/api/posts/get/about').then(({data}) => {
    return Q.Promise((resolve, reject) => {
      resolve({
        text: data.text,
        img: data.media && path.join(data.media.content, data.media.name),
        media: data.media
      });
    });
  });
}

var About = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetch, transition => transition.redirect('/gallery'), addPromise.promise)],

  componentDidMount() {
    var store = this.props.store.getStore();

    if (store.img) {
      var img = new Image();
      img.onload = () => addPromise.resolve();
      img.src = store.img;
    } else {
      addPromise.resolve();
    }
  },

  render() {
    var store = this.props.store.getStore();
    var media = store.media;
    return (
      <SinglePage meta={{title: 'About'}}>
        <div className="about-page__image">
          <img src={store.img} alt="" />
        </div>
        <div className="about-page__header">
          <div className="about-page__title">This is Weston James Palmer</div>
          <div className="about-page__description">
            Exploring the idea that there is something similar between unvcovering insight in a contrtttemplative practice. Similar between uncovering insight in a contemplative practice.
            <br/>
            <br/>
            Email: <a href="mailto:weston@wjpstudio.com">Weston@WJPStudio.com</a>
            <br/>
            Twitter: <a href="https://twitter.com/westonjamesp">@WestonJamesP</a>
            <br/>
            Instagram: <a href="http://instagram.com/westonjamespalmer/">@WestonJamesPalmer</a>
            <br/>
            Snapchat: <span href="#">@WestonJamesPalmer</span>
            <br/>
            Phhhoto: <a href="http://phhhoto.com/westonjamespalmer">@WestonJamesPalmer</a>
            <br/>
            SoundCloud: <a href="https://soundcloud.com/westonjamespalmer">@WestonJamesPalmer</a>
            <br/>
            Vimeo: <a href="http://vimeo.com/westonjamespalmer">@WestonJamesPalmer</a>
            <br/>
            Youtube: <a href="http://www.youtube.com/channel/UCBb3XxIWJvM-k6MsO5mvDew">@WestonJamesPalmer</a>
            <br/>
          </div>
          <!--<a href="/faq" className="read-more">Read Weston James Pamer’s FAQs</a>-->
        </div>
        <div className="about-page__content" dangerouslySetInnerHTML={{__html: store.text}} />
        <SocialShare />
      </SinglePage>
    );
  }
});

module.exports = About;