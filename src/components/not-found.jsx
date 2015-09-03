var React = require('react');

var NotFound = React.createClass({
  statics: {
    willTransitionTo(transition) {
      transition.redirect('/');
    }
  },

  render() {
    return (
      <div />
    );
  }
});

module.exports = NotFound;