var React = require('react'),
  Router = require('react-router');

require('./search-input.styl');

var SearchInput = React.createClass({
  mixins: [Router.Navigation],

  getInitialState() {
    return {
      searchOn: false,
      inputActive: false
    };
  },

  componentDidUpdate(prevProps, prevState) {
    var input = this.refs.input.getDOMNode();
    if (this.state.searchOn && !prevState.searchOn) input.focus();
  },

  toggleSearchBlock() {
    this.setState({searchOn: !this.state.searchOn});
  },

  toggleInput(e) {
    if (e.currentTarget.value && !this.state.inputActive)
      this.setState({inputActive: true});
    else if (!e.currentTarget.value && this.state.inputActive)
      this.setState({inputActive: false});
  },

  submit(e) {
    e.preventDefault();
    var input = this.refs.input.getDOMNode();
    var value = input.value.trim();
    if (value && value.length > 3) {
      this.setState({searchOn: false, inputActive: false});
      this.transitionTo(`/search?s=${value}`);
      input.blur();
      input.value = '';
    }
  },

  closeSearchBlock() {
    this.setState({searchOn: false});
  },

  render() {
    var searchBlockClass = 'search-input__block';
    searchBlockClass += this.state.searchOn ? ' search-input__block--active' : '';

    var inputClass = 'search-input__input';
    inputClass += this.state.inputActive ? ' search-input__input--active' : '';

    return (
      <div className="search-input">
        <a onClick={this.toggleSearchBlock} className="search-input__icon" />
        <div className={searchBlockClass}>
          <a onClick={this.closeSearchBlock} className="search-input__close" />
          <form onSubmit={this.submit}>
            <input ref="input" onChange={this.toggleInput} onBlur={this.closeSearchBlock} placeholder="Search" className={inputClass} />
          </form>
          <div className="search-input__text"></div>
        </div>
      </div>
    );
  }
});

module.exports = SearchInput;