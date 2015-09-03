var React = require('react'),
  {first, range, isMobile} = require('../../lib/helpers'),
  HomeSection = require('./home-section.jsx'),
  //Boutique = require('../previews/boutique-preview.jsx'),
  Stories = require('../previews/stories-preview.jsx'),
  Gallery = require('../previews/gallery-preview.jsx'),
  Phhhoto = require('../previews/phhhoto-preview.jsx'),
  Instagram = require('../previews/instagram-preview.jsx'),
  Music = require('../previews/music-preview.jsx'),
  HomeSocial = require('./home-social.jsx'),
  HomeSlider = require('./home-slider.jsx'),
  {Link} = require('react-router'),
  logo = require('../images/full-logo.png'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  fetchData = require('../../lib/fetchData'),
  Q = require('q'),
  path = require('path'),
  moment = require('moment'),
  cameFrom = require('../../lib/cameFrom'),
  changeMeta = require('../../lib/changeMeta');

require('./home.styl');

function fetchHomeData() {
  var slides = fetchData('/app/api/slides');
  var categories = fetchData('/app/api/posts/all');
  var music = fetchData('/app/api/music');
  var twitter = fetchData('/app/api/service/twitter');
  var instagram = fetchData('/app/api/service/instagram');
  //var boutique = fetchData('/app/api/service/shopify');

  return Q.all([slides, categories, music, twitter, instagram]).then(([slides, categories, music, twitter, instagram]) => {
    return Q.fcall(() => {
      var {stories, gallery} = categories.data;

      var DEFAULT_COLOR = "#ffffff";

      return {
        slides: slides.data
        .filter(slide => slide.media && (isMobile() ? slide.media.type === 'image' : true))
        .map((slide) => ({
          id: slide.id,
          title: slide.title,
          align: slide.align,
          category: slide.category.title,
          text: slide.text,
          author: slide.author,
          ext: slide.ext,
          categoryColor: slide['color_category'] || DEFAULT_COLOR,
          titleColor: slide['color_title'] || DEFAULT_COLOR,
          textColor: slide['color_text'] || DEFAULT_COLOR,
          authorColor: slide['color_author'] || DEFAULT_COLOR,
          linkType: slide['link_type'],
          linkUrl: slide['link_url'],
          linkText: slide['link_text'],
          linkColor: slide['color_link'] || DEFAULT_COLOR,
          media: slide.media
        })),

        //boutique: boutique.data.map((item) => ({
        //  id: item.id,
        //  title: item.title,
        //  preview: item.description,
        //  link: item.url,
        //  img: item.media && path.join(item.media.content, item.media.name)
        //})),

        stories: stories.posts.map((story) => ({
          id: story.id,
          title: story.title,
          slug: story.slug,
          preview: story.description,
          ext: story.ext,
          img: story.media ? path.join(story.media.content, story.media.thumbnail) : null,
          author: story.author,
          media: story.media
        })),

        gallery: gallery.posts.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          preview: item.description,
          ext: item.ext,
          img: item.media ? path.join(item.media.content, item.media.name) : null,
          date: moment(item['create_date']).format('L')
        })),

        music: music.data.map(item => ({
          id: item.id,
          title: item.name,
          slug: item.slug,
          embed: item.content,
          date: moment(item['create_date']).format('L')
        })),

        twitter: {
          lastTweet: twitter.data[0].text,
          id: twitter.data[0]['id_str']
        },

        //phhhoto: range(1, 14).map(i => ({id: i, img: 'http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10852685_539756786160481_1693885865_s.jpg'})),
        instagram: instagram.data.data.filter(item => item.type === 'image').map(item => ({
          id: item.id,
          img: item.images['standard_resolution'].url,
          source: item.link
        }))
      };
    });
  })
}

var Home = React.createClass({
  mixins: [asyncChangeRoute(fetchHomeData)],

  statics: {
    willTransitionFrom() {
      cameFrom.set('/');
    }
  },

  componentDidMount() {
    var cfrom = cameFrom.get();

    changeMeta({});

    if (cfrom.path === '/') {
      setTimeout(() => window.scrollTo(0, cfrom.scroll), 0);
    }
  },

  render() {
    var data = this.props.store.getStore();

    //var boutiqueItems = first(3, data.boutique).map(item => <Boutique key={item.id} {...item} />);
    var storiesItems = first(100, data.stories).map(item => <Stories key={item.id} {...item} />);
    var galleryItems = first(2, data.gallery).map(item => <Gallery key={item.id} {...item} />);
    //var phhhotoItems = first(14, data.phhhoto).map(item => <Phhhoto key={item.id} {...item} />);
    var instagramItems = first(21, data.instagram).map(item => <Instagram key={item.id} {...item} />);
    var music = first(3, data.music).map(item => <Music key={item.id} {...item} />);

    return (
      <div className="home">
        <HomeSlider slides={data.slides} />
        <div className="home__wrapper">          
          <div className="home__sections">
            <HomeSection title="Stories" link="/stories">{storiesItems}</HomeSection>
          </div>
        </div>
      </div>
    );
  }
});

function clearText(text) {
  if (!isMobile()) return text.replace(/[^a-z0-9@:\/\s\.\-]/gi, '').replace(/\s+/g, ' ');
  else return text;
}

function wrapLink(text) {
  return text.replace(/(https?:\/\/(?:\w+)\.(?:\w+)(?:\.(?:\w+))?(?:[\w\/]*)?)/g, '<a href="$1" target="_blank">$1</a>');
}

function wrapTwitterAcc(text) {
  return text.replace(/(@\w+)/g, m => `<a href="http://twitter.com/${m.substring(1)}" target="_blank">${m}</a>`);
}

module.exports = Home;