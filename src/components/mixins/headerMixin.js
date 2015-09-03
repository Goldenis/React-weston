var Router = require('react-router');

module.exports = {
  componentDidMount() {
    this.props.header.hideHeader();
  },

  componentWillUnmount() {
    this.props.header.showHeader();
  }
};