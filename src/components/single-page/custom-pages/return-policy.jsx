var React = require('react'),
  fetchData = require('../../../lib/fetchData'),
  DataStore = require('../../../lib/DataStore'),
  SingleCustomPage = require('./single-custom-page.jsx'),
  headerMixin = require('../../mixins/headerMixin');

var ReturnPolicy = React.createClass({
  statics: {
    willTransitionTo(transition) {
      transition.wait(fetchData('/app/api/posts/get/return-policy').then(({data}) => DataStore.setStore({
        text: data.text,
        title: data.title
      }), () => transition.abort()));
    }
  },

  mixins: [headerMixin],

  render() {
    var store = this.props.store.getStore();
    return (
      <SingleCustomPage title={store.title} content={store.text} />
    );
  }
});

module.exports = ReturnPolicy;