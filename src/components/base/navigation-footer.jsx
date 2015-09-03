var React = require('react'),
  {Link} = require('react-router');

require('./navigation-footer.styl');

var NavigationFooter = React.createClass({
  openWjp(e) {
    e.preventDefault();
    window.open('http://wjpstudio.com/', 'WJP Studio', 'width=600,height=600');
  },

  render() {
    return (
      <nav className="navigation-footer">
        <Link to="/about" className="navigation-footer__item">About</Link>
        <Link to="/contact" className="navigation-footer__item">Contact</Link>
        <!-- <Link to="/careers" className="navigation-footer__item">Careers</Link> -->
        <a href="http://wjpstudio.com/" onClick={this.openWjp} className="navigation-footer__item">WJP Studio</a>
      </nav>
    );
  }
});

module.exports = NavigationFooter;