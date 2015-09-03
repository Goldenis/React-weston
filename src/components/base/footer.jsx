var React = require('react'),
  NavigationFooter = require('./navigation-footer.jsx'),
  fetchData = require('../../lib/fetchData');

require('./footer.styl');

var Footer = React.createClass({
  getInitialState() {
    return {
      form: {
        email: ''
      },
      subscribed: false
    };
  },

  emptyForm() {
    var form = this.state.form;
    var keys = Object.keys(form);

    keys.forEach(key => form[key] = '');
    this.setState({form});
  },

  changeForm(e) {
    var form = this.state.form;
    var target = e.currentTarget;

    form[target.name] = target.value;

    this.setState({form});
  },

  submitForm(e) {
    e.preventDefault();

    if (!this.state.subscribed) {
      fetchData('/app/api/service/mailchimp?email='+this.state.form.email).then(({status}) => {
        if (status === 'success') {
          this.setState({subscribed: true});
          this.emptyForm();
        }
      })
    }
  },

  render() {
    return (
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="footer__container">
            <NavigationFooter />
            <div className="footer__copy"></div>
          </div>
          <div className="footer__subscribe">
            <div className="footer__subscribe-text">Get the latest releases, stories, and more...</div>
            <form onSubmit={this.submitForm}>
              <div>
                <input className="footer__subscribe-input" placeholder={this.state.subscribed ? "Success!" : "Email Address"} name="email" disabled={this.state.subscribed} value={this.state.form.email} onChange={this.changeForm} />
              </div>
              <div>
                <button className="footer__subscribe-btn" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = Footer;