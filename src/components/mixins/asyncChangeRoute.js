var DataStore = require('../../lib/DataStore'),
  showOverlay = require('../../lib/showOverlay'),
  Q = require('q');

function defaultErrorCallback(transition) {
  transition.redirect('/');
}

module.exports = function(action, errorCallback = defaultErrorCallback, addPromise = null) {
  return {
    statics: {
      willTransitionTo(transition, params, query) {
        var promise = action(params, query);

        promise.then(data => {
          DataStore.setStore(data);
        }, () => errorCallback(transition));

        if (!(addPromise && typeof addPromise === 'object' && 'then' in addPromise)) addPromise = null;

        var transitionPromise = Q.all([promise, showOverlay(addPromise ? Q.all([addPromise, promise]) : promise)]);

        transition.wait(transitionPromise);
      }
    }
  };
};