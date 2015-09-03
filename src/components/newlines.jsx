var React = require('react');

var Newlines = React.createClass({
  render() {
    var text = this.props.text.replace(/\n/g, '<br/>');

    return (
      <span dangerouslySetInnerHTML={{__html: text}} />
    );
  }
});

module.exports = Newlines;