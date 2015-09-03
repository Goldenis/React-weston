var React = require('react'),
  Socials = require('../../home/home-social.jsx'),
  SinglePage = require('../single-page.jsx'),
  headerMixin = require('../../mixins/headerMixin'),
  asyncChangeRoute = require('../../mixins/asyncChangeRoute'),
  Q = require('q');

require('./contact.styl');

var Contact = React.createClass({
  mixins: [headerMixin, asyncChangeRoute(Q.resolve)],

  render() {
    return (
      <SinglePage meta={{title: 'Contact'}}>
        <div className="contact-page">
          <div className="contact-page__title">Hi.</div>
          <div className="contact-page__description">Exploring the idea that there is something similar between uncovering insight in a contemplative practice.</div>
          <!--<a href="/faq" className="read-more contact-page__link">Read Weston James Pamer’s FAQs</a>-->
          <Socials />
        </div>
      </SinglePage>
    );
  }
});

module.exports = Contact;