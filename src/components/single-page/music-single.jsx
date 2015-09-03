var React = require('react'),
  SinglePage = require('./single-page.jsx'),
  asyncChangeRoute = require('../mixins/asyncChangeRoute'),
  fetchData = require('../../lib/fetchData'),
  headerMixin = require('../mixins/headerMixin'),
  Q = require('q'),
  moment = require('moment'),
  SocialShare = require('../social-share.jsx');

require('./music-single.styl');

function fetchMusicItem(params) {
  return Q.Promise((resolve, reject) => {
    return fetchData(`/app/api/music/get/${params.slug}`).then(({data: item}) => {
      resolve({
        title: item.name,
        embed: item.content,
        date: moment(item['create_date']).format('L'),
        next: item.next && {
          slug: item.next.slug
        },
        prev: item.prev && {
          slug: item.prev.slug
        }
      });
    }, reject);
  });
}

var MusicSingle = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetchMusicItem, transition => transition.redirect('/music'), true)],

  render() {
    var data = this.props.store.getStore();
    return (
      <SinglePage categoryLink="/music" next={data.next} prev={data.prev} tiny={true} meta={{title: data.title}} comments="1">
        <div className="music-single">
          <div className="music-single__embed" dangerouslySetInnerHTML={{__html: data.embed}} />
          <div className="music-single__title">{data.title}</div>
          <div className="music-single__date">{data.date}</div>
          <SocialShare />
        </div>
      </SinglePage>
    );
  }
});

module.exports = MusicSingle;