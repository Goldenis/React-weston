var React = require('react'),
  SinglePage = require('../single-page.jsx'),
  fetchData = require('../../../lib/fetchData'),
  DataStore = require('../../../lib/DataStore'),
  path = require('path'),
  headerMixin = require('../../mixins/headerMixin'),
  asyncChangeRoute = require('../../mixins/asyncChangeRoute'),
  Q = require('q');

require('./faq.styl');

function fetch() {
  return Q.all([fetchData('/app/api/posts/get/faq'), fetchData('/app/api/posts/list/faq')]).then(([{data}, {data: faqs}]) => {
    return Q.Promise((resolve, reject) => {
      resolve({
        title: data.title,
        description: data.description,
        media: data.media,
        faqs
      });
    });
  });
}

var Faq = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetch)],

  render() {
    var store = this.props.store.getStore(),
      media = store.media,
      image = media && path.join(media.content, media.name),
      faqs = store.faqs.map(faq => <div className="faq-page__faqs-block" key={faq.slug}><strong>{faq.title}</strong> {faq.description}</div>)

    return (
      <SinglePage closeWatcher={true} comments="1" meta={{title: 'Faq'}}>
        <div className="faq-page">
          <div className="faq-page__header">
            <h2 className="faq-page__title">{store.title}</h2>
            <div className="faq-page__description">{store.description}</div>
          </div>
          <div className="faq-page__image">
            {image && <img src={image} alt="" />}
          </div>
          <div className="faq-page__faqs">
            {faqs}
          </div>
        </div>
      </SinglePage>
    );
  }
});

module.exports = Faq;