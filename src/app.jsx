var React = require('react'),
  Router = require('react-router'),
  routes = require('./routes.jsx');

require('./components/fonts/SackersGothicW01-Medium/styles.css');
require('./components/fonts/IdealSans-Light/styles.css');
require('./components/fonts/IdealSans-ExtraLight/styles.css');
require('./components/fonts/HiraKakuPro-W3-AlphaNum/styles.css');
require('./components/fonts/IdealSans-Thin/styles.css');
require('./components/fonts/FreightTextBook/styles.css');

React.initializeTouchEvents(true);

var route = Router.create({
  routes,
  location: Router.HistoryLocation
});

route.run(Handler => {
  React.render(<Handler />, document.getElementById('app'));
});