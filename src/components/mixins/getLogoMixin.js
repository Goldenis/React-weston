var fetchData = require('../../lib/fetchData'),
  path = require('path');

module.exports = function(logoName) {
  return {
    getInitialState() {
      return {logoUrl: null};
    },

    componentDidMount() {
      fetchData('/app/api/option/logos').then(({data}) => {
        var logo = data[logoName];
        if (logo) {
          var logoUrl = path.join(logo.content, logo.name);
          var img = new Image();
          img.onload = () => {
            if (this.isMounted()) this.setState({logoUrl});
          };
          img.src = logoUrl;
        }
      });
    }
  };
};