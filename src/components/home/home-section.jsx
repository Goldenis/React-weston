var React = require('react'),
  {Link} = require('react-router');

require('./home-section.styl');

var HomeSection = React.createClass({
  getDefaultProps() {
    return {
      titleMargin: true,
      link: '/'
    }
  },

  render() {
    var titleClassName = 'home-section__title';
    if (!this.props.titleMargin) titleClassName += ' home-section__title--no-margin';

    return (
      <section className="home-section">
        <div className="home-section__items">
          {this.props.children}
        </div>
      </section>
    );
  }
});

module.exports = HomeSection;