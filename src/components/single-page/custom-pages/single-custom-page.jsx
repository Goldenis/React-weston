var React = require('react'),
  SinglePage = require('../single-page.jsx');

require('./single-custom-page.styl');

var SingeCustomPage = React.createClass({
  render() {
    return (
      <SinglePage closeWatcher={true}>
        <div className="single-custom-page">
          <h2 className="single-custom-page__title">{this.props.title}</h2>
          <div className="single-custom-page__content" dangerouslySetInnerHTML={{__html: this.props.content}} />
        </div>
      </SinglePage>
    );
  }
});

module.exports = SingeCustomPage;