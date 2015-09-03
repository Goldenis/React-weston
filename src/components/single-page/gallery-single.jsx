var React = require('react/addons'),
  cx = React.addons.classSet,
  {findWhere, isMobile} = require('../../lib/helpers'),
  SinglePage = require('./single-page.jsx'),
  headerMixin = require('../mixins/headerMixin'),
  Newlines = require('../newlines.jsx'),
  Q = require('q'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  fetchData = require('../../lib/fetchData'),
  moment = require('moment'),
  path = require('path'),
  {Link} = require('react-router'),
  GallerySlider = require('./gallery-slider.jsx'),
  SocialShare = require('../social-share.jsx'),
  replacePostMixin = require('../mixins/replacePostMixin'),
  VideoBlock = require('./video-block.jsx'),
  addPromise = Q.defer(),
  changeMeta = require('../../lib/changeMeta');

require('./gallery-single.styl');

function fetchGalleryItem(params) {
  return fetchData(`/app/api/posts/get/${params.slug}?view=true`).then(({data: item}) => {
    return Q.fcall(() => {
      return {
        title: item.title,
        date: moment(item['create_date']).format('L'),
        preview: item.description,
        content: item.text,
        views: item.views,
        mode: item.ext && item.ext.mode,
        slides: item.ext && item.ext.gallery && item.ext.gallery.map(slide => ({
          id: slide.id,
          img: path.join(slide.content, slide.name)
        })),
        img: item.media ? path.join(item.media.content, item.media.name) : null,
        thumbnail: item.media ? path.join(item.media.content, item.media.thumbnail) : null,
        video: item.ext && item.ext.video,
        audio: item.ext && item.ext.audio,
        comments: item.comments,
        next: item.next && {
          title: item.next.title,
          slug: item.next.slug,
          preview: item.next.description,
          img: item.next.media && path.join(item.next.media.content, item.next.media.thumbnail),
          date: moment(item.next['create_date']).format('L')
        },
        prev: item.prev && {
          title: item.prev.title,
          slug: item.prev.slug,
          preview: item.prev.description,
          img: item.prev.media && path.join(item.prev.media.content, item.prev.media.thumbnail),
          date: moment(item.prev['create_date']).format('L')
        }
      };
    });
  });
}

var GallerySingle = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetchGalleryItem, transition => transition.redirect('/gallery'), addPromise.promise), replacePostMixin],

  getInitialState() {
    return {
      sliderBlockHeight: 0,
      sliderContentHeight: 0,
      trueRatio: true,
      audio: false
    }
  },

  componentDidMount() {
    var data = this.props.store.getStore();

    this.iframeResize();

    if (data.slides) {
      Q.all(data.slides.map(slide => {
        return Q.Promise(resolve => {
          var img = new Image();
          img.onload = () => resolve();
          img.src = slide.img;
        });
      })).then(() => {
        if (this.isMounted()) addPromise.resolve();
      });
    } else {
      addPromise.resolve();
    }

    if (data.mode == 1) {
      this.scrollToSlider();
      this.resizeHeight();
      window.addEventListener('resize', this.resizeHeight);
    }

    this.props.store.onChange(this.postChange);
  },

  componentWillUnmount() {
    var data = this.props.store.getStore();

    if (data.mode == 1) {
      window.removeEventListener('resize', this.resizeHeight);
    }

    this.props.store.removeOnChange(this.postChange);
  },

  toggleAudio() {
    var audio = this.refs.audio;

    if (this.state.audio) {
      audio && audio.getDOMNode().pause();
    } else {
      audio && audio.getDOMNode().play();
    }

    this.setState({audio: !this.state.audio});
  },

  postChange() {
    this._changed = true;
  },

  componentDidUpdate() {
    if (this._changed) {
      this.scrollToSlider();
      this._changed = false;
    }
  },

  scrollToSlider() {
    var data = this.props.store.getStore();

    if (data.mode == 1) {
      setTimeout(() => this.isMounted() && window.scrollTo(0, this.refs.sliderBlock.getDOMNode().getBoundingClientRect().top))
    }
  },

  iframeResize() {
    var iframes = this.refs.content.getDOMNode().querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      var width = iframes[i].getAttribute('width');

      if (width) {
        iframes[i].parentNode.style.maxWidth = width + 'px';
      }
    }
  },

  resizeHeight() {
    var {innerWidth: width, innerHeight: height} = window;

    this.isMounted() && this.setState({sliderBlockHeight: height, sliderContentHeight: this.refs.sliderContent.getDOMNode().offsetHeight, trueRatio: width > height});
  },

  isVideo(video) {
    return video && /<iframe.+<\/iframe>/.test(video);
  },

  render() {
    var data = this.props.store.getStore();
    var preview = data.preview ? <h3 className="gallery-single__preview"><Newlines text={data.preview} /></h3> : null;

    var next = data.next ? (
      <div className="gallery-single">
        <div className="gallery-single__next">
          <a href={path.join('/gallery', data.next.slug)} onClick={this.changePost} className="gallery-single__next-link">
            <div className="gallery-single__next-text">Next Gallery Piece</div>
            <div className="gallery-single__next-img">
              <img src={data.next.img} alt="" />
            </div>
            <div className="gallery-single__next-title">{data.next.title}</div>
          </a>
          <div className="gallery-single__next-preview"><Newlines text={data.next.preview} /></div>
          <div className="gallery-single__next-date">{data.next.date}</div>
        </div>
      </div>
    ) : null;

    var slideBlockStyles = data.mode == 1 && this.state.trueRatio && this.state.sliderBlockHeight ? {minHeight: this.state.sliderBlockHeight, background: 'black', position: 'relative'} : null;
    var slideContentStyles = data.mode == 1 &&
      this.state.trueRatio &&
      this.state.sliderContentHeight < window.innerHeight
      ? {top: this.state.sliderBlockHeight / 2 - this.state.sliderContentHeight / 2} : null;

    return (
      <SinglePage categoryLink="/gallery" next={data.next} prev={data.prev} nextPostComponent={next} audio={data.audio} views={data.views} comments={data.comments} meta={{title: data.title, content: data.preview, image: data.thumbnail}}>
        <div className={`gallery-single__slider-wrapper-block${data.mode == 1 ? ' gallery-single__slider-wrapper-block--full' : ''}`} style={slideBlockStyles} ref="sliderBlock">
          <div className="gallery-single__slider-block" ref="sliderContent"  style={slideContentStyles}>
            {this.isVideo(data.video) && <VideoBlock video={data.video} />}
            {data.slides && !this.isVideo(data.video) && <GallerySlider slides={data.slides} mode={data.mode} />}
          </div>
        </div>
        <SocialShare />
        {data.audio && isMobile() && <div>
          <div className={cx({"gallery-single__audio": true, "gallery-single__audio--active": this.state.audio})} onClick={this.toggleAudio}></div>
          <audio ref="audio">
            <source type="audio/mpeg" src={data.audio.mp3} />
            <source type="audio/ogg" src={data.audio.ogg} />
          </audio>
        </div>}
        <div className="gallery-single">
          <div className="gallery-single__container-wrapper">
            <h2 className="gallery-single__title">{data.title}</h2>
            {preview}
            <div className="gallery-single__date">{data.date}</div>
            <div className="gallery-single__container">
              <div className="gallery-single__content" dangerouslySetInnerHTML={{__html: data.content}} ref="content" />
            </div>
          </div>
        </div>
      </SinglePage>
    );
  }
});

module.exports = GallerySingle;