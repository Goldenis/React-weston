var React = require('react'),
  Router = require('react-router'),
  {RouteHandler} = Router,
  Header = require('./header.jsx'),
  HeaderMobile = require('./header-mobile.jsx'),
  Footer = require('./footer.jsx'),
  DataStore = require('../../lib/DataStore'),
  {isMobile} = require('../../lib/helpers');

require('./base.styl');

var Base = React.createClass({
  mixins: [Router.Navigation, Router.State],

  getInitialState() {
    return {
      header: true,
      isMobile: true
    }
  },

  componentDidMount() {
    if (!isMobile())
      this.setState({isMobile: false});
  },

  hideHeader() {
    this.setState({header: false});
  },

  showHeader() {
    this.setState({header: true});
  },

  render() {
    var header = {
        showHeader: this.showHeader,
        hideHeader: this.hideHeader
      };

    var baseClass = 'base';
    baseClass += this.state.isMobile ? ' base--mobile' : '';

    var isInternal = /^\/((stories|gallery|music|preview)\/.+|terms|careers|return\-policy|shipping\-info|faq|contact|about)$/.test(this.getPathname());

    return (
      <div className={baseClass}>
        {this.state.header ? <Header /> : null}
        {this.state.header ? <HeaderMobile /> : null}
        <div className="base__content">
          <RouteHandler store={DataStore} header={header} />
        </div>
      </div>
    );
  }
});

module.exports = Base;