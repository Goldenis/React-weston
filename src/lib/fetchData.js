var Q = require('q'),
  request = require('superagent');

module.exports = function(requestPath) {
  var deferred = Q.defer();

  request
    .get(requestPath)
    .withCredentials()
    .end(function(err, res) {
      if (err || res.error) return deferred.reject();

      try {
        deferred.resolve(JSON.parse(res.text));
      } catch(e) {
        deferred.resolve(res.text);
      }
    });

  return deferred.promise;
};