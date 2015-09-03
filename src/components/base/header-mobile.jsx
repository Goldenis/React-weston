var React = require('react'),
  {Link} = require('react-router'),
  Velocity = require('velocity-animate'),
  SearchInput = require('./search-input.jsx'),
  showOverlay = require('../../lib/showOverlay');

require('./header.styl');

var HeaderMobile = React.createClass({
  getInitialState() {
    return {nav: false, toTop: false};
  },

  //componentDidMount() {
  //  var nav = this.refs.nav.getDOMNode();
  //
  //  if (this.state.nav)
  //    Velocity(nav, 'slideDown', {display: 'block'});
  //  else
  //    Velocity(nav, 'slideUp', {display: 'none'});
  //},

  toggleNav() {
    this.setState({nav: !this.state.nav});
  },

  closeNav() {
    this.setState({nav: false, toTop: true});
    showOverlay.changeOverlay(() => this.setState({toTop: false}));
  },

  render() {
    var toggleClass = 'header-mobile__block--toggle';
    toggleClass += this.state.nav ? ' header-mobile__block--toggle-close' : '';

    var navClass = 'header-mobile__nav';
    navClass += this.state.nav ? ' header-mobile__nav--active' : '';

    var over = this.state.toTop ? {zIndex: 9999} : null;

    return (
      <header className="header-mobile" style={over}>
        <div className="header-mobile__top">
          <a onClick={this.toggleNav} className={`header-mobile__block ${toggleClass}`} />
          <Link onClick={this.closeNav} to="/" className="header-mobile__block header-mobile__block--logo"></Link>
          <div className="header-mobile__search">
            <!--<div className="header__cart-widget-icon"></div>-->
            <SearchInput />
          </div>
        </div>
        <nav ref="nav" className={navClass}>
          <div className="header-mobile__nav-scroll">
            <Link onClick={this.closeNav} to="/stories" className="header-mobile__nav-item">Stories</Link>
            <Link onClick={this.closeNav} to="/gallery" className="header-mobile__nav-item">Gallery</Link>
            <Link onClick={this.closeNav} to="/instagram" className="header-mobile__nav-item">Instagram</Link>
            <Link onClick={this.closeNav} to="/music" className="header-mobile__nav-item">Music</Link>
          </div>
        </nav>
      </header>
    );
  }
});

module.exports = HeaderMobile;