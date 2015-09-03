var React = require('react'),
  {Link, State} = require('react-router');

require('./navigation.styl');

var Navigation = React.createClass({
  mixins: [State],

  onClick(route) {
    return () => {
      this.isActive(route) && location.reload();
      this.props.changeOverlay();
    }
  },

  render() {
    return (
      <nav className="navigation">
        <Link onClick={this.onClick('stores')} to="/stories" className="navigation__item">Stories</Link> 
        <Link onClick={this.onClick('music')} to="/music" className="navigation__item">Music</Link>       
        <Link onClick={this.onClick('instagram')} to="/instagram" className="navigation__item">Instagram</Link>        
        <Link onClick={this.onClick('twitter')} to="/twitter" className="navigation__item">Twitter</Link>
      </nav>

    );
  }
});

module.exports = Navigation;