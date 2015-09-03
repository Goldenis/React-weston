var React = require('react'),
  SinglePage = require('./single-page.jsx'),
  {findWhere} = require('../../lib/helpers'),
  headerMixin = require('../mixins/headerMixin'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  fetchDate = require('../../lib/fetchData'),
  Q = require('q'),
  path = require('path'),
  {Link} = require('react-router'),
  SocialShare = require('../social-share.jsx'),
  replacePostMixin = require('../mixins/replacePostMixin'),
  Newlines = require('../newlines.jsx'),
  moment = require('moment'),
  VideoBlock = require('./video-block.jsx'),
  addPromise = Q.defer();

require('./story-single.styl');

function fetchPost(params) {
  return fetchDate(`/app/api/posts/get/${params.slug}?view=true`).then(({data: story}) => {
    return Q.fcall(() => {
      return {
        title: story.title,
        content: story.text,
        preview: story.description,
        author: story.author,
        data: story['created_by'],
        views: story.views,
        img: story.media && path.join(story.media.content, story.media.name),
        thumbnail: story.media && path.join(story.media.content, story.media.thumbnail),
        ext: story.ext,
        media: story.media,
        comments: story.comments,
        next: story.next && {
          title: story.next.title,
          slug: story.next.slug,
          preview: story.next.description,
          author: story.next.author,
          //img: story.next.media && path.join(story.next.media.content, story.next.media.thumbnail)
          media: story.next.media
        },
        prev: story.prev && {
          title: story.prev.title,
          slug: story.prev.slug,
          preview: story.prev.description,
          author: story.prev.author,
          //img: story.prev.media && path.join(story.prev.media.content, story.prev.media.thumbnail)
          media: story.prev.media
        }
      };
    });
  });
}

var StorySingle = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetchPost, (transition => transition.redirect('/stories')), addPromise.promise), replacePostMixin],

  componentDidMount() {
    var data = this.props.store.getStore();

    this.iframeResize();
    this.resizeTitle();

    window.addEventListener('resize', this.resizeTitle);

    if (data.img) {
      var img = new Image();
      img.onload = () => addPromise.resolve();
      img.src = data.img;
    } else {
      addPromise.resolve();
    }
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeTitle);
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

  resizeTitle() {
    var title = this.refs.title.getDOMNode();
    var size = (window.innerWidth - 1120) / 2;
    title.style.paddingLeft = (size > 0 ? size : 0)  + 'px';
  },

  isVideo(video) {
    return video && /<iframe.+<\/iframe>/.test(video);
  },

  render() {
    var data = this.props.store.getStore();
    var preview = data.preview ? <h3 className="story-single__preview"><Newlines text={data.preview} /></h3> : null;
    var author = data.author ? <div className="story-single__author">by {data.author} &nbsp;&nbsp; {moment(data.date).format('MMMM DD, YYYY')}</div> : null;
    var isVideo = data.ext && this.isVideo(data.ext.video);

    var next = data.next ? (
      <div className="story-single">
        <div className="story-single__next">
          <a href={path.join('/stories', data.next.slug)} onClick={this.changePost} className="story-single__next-link">
            <div className="story-single__next-text">Next Story</div>
            <div className="story-single__next-title">{data.next.title}</div>
            <div className="story-single__next-preview">{data.next.preview}</div>
          </a>
          {data.next.author ? <div className="story-single__next-author">by {data.next.author}</div> : null}
          <div className="story-single__next-img">
            <a href={path.join('/stories', data.next.slug)} onClick={this.changePost}>
              <img src={data.next.media.type === 'image' ? path.join(data.next.media.content, data.next.media.thumbnail) : data.next.media.thumbnail} alt="" />
            </a>
          </div>
        </div>
      </div>
    ) : null;

    return (
      <SinglePage categoryLink="/stories" next={data.next} prev={data.prev} nextPostComponent={next} views={data.views} comments={data.comments} meta={{title: data.title, content: data.preview, image: data.thumbnail}}>
        <div className="story-single">
          <div className="story-single__img">
            {isVideo ? <VideoBlock video={data.ext.video} /> : <img src={data.img} alt="" />}
          </div>
          <div className="story-single__header">
            <h2 className="story-single__title" ref="title">{data.title}</h2>
            {preview}
            {author}
          </div>
          <div className="story-single__content" dangerouslySetInnerHTML={{__html: data.content}} ref="content" />
          <SocialShare />
        </div>
      </SinglePage>
    );
  }
});

module.exports = StorySingle;