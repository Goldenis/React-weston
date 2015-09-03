var Router = require('react-router');

module.exports = {
  mixins: [Router.Navigation],

  changePost(e) {
    e.preventDefault();
    this.replaceWith(e.currentTarget.pathname);
  }
};