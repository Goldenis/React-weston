var React = require('react'),
  fetchData = require('../../../lib/fetchData'),
  DataStore = require('../../../lib/DataStore'),
  SingleCustomPage = require('./single-custom-page.jsx'),
  headerMixin = require('../../mixins/headerMixin'),
  asyncChangeRoute = require('../../mixins/asyncChangeRoute'),
  Q = require('q');

function fetch() {
  return fetchData('/app/api/posts/get/careers').then(({data}) => {
    return Q.Promise((resolve, reject) => {
      resolve({
        text: data.text,
        title: data.title
      });
    });
  });
}

var Careers = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(fetch)],

  render() {
    var store = this.props.store.getStore();
    return (
      <SingleCustomPage title={store.title} content={store.text} />
    );
  }
});

module.exports = Careers;