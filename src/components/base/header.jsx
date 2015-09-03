var React = require('react'),
  Navigation = require('./navigation.jsx'),
  Router = require('react-router'),
  {Link, State} = Router,
  {debounce} = require('../../lib/helpers'),
  SearchInput = require('./search-input.jsx'),
  Velocity = require('velocity-animate'),
  showOverlay = require('../../lib/showOverlay');

require('./header.styl');

var Header = React.createClass({
  mixins: [State],

  getInitialState() {
    return {
      toTop: false
    }
  },

  //getInitialState() {
  //  return {
  //    latestScroll: 0,
  //    scrollState: 'down'
  //  };
  //},
  //
  //componentDidMount() {
  //  window.addEventListener('scroll', this.scroll);
  //},
  //
  //componentWillUnmount() {
  //  window.removeEventListener('scroll', this.scroll);
  //},
  //
  //scroll: debounce(function () {
  //  var header = this.refs.header.getDOMNode(), state = this.state.scrollState, currentScroll = window.scrollY;
  //
  //  if (this.state.scrollState === 'down' && currentScroll - this.state.latestScroll > 5) {
  //    Velocity(header, {translateY: '-100%'});
  //    state = 'up';
  //  } else if (this.state.scrollState === 'up' && this.state.latestScroll - currentScroll > 5) {
  //    Velocity(header, {translateY: '0'});
  //    state = 'down';
  //  }
  //
  //  this.setState({latestScroll: currentScroll, scrollState: state})
  //}, 400, true),

  changeOverlay() {
    this.setState({toTop: true});
    showOverlay.changeOverlay(() => this.setState({toTop: false}));
  },

  logoClick() {
    this.isActive('/') && location.reload();
    this.changeOverlay();
  },

  render() {
    var over = this.state.toTop ? {zIndex: 9999} : null;

    return (
      <header className="header" ref="header" style={over}>
        <div className="header__container">
          <Link to="/" className="header__logo" onClick={this.logoClick}></Link>
          <Navigation changeOverlay={this.changeOverlay} />
          <!--<div className="header__cart-widget-icon"></div>-->
          <SearchInput />
        </div>
      </header>
    );
  }
});

module.exports = Header;