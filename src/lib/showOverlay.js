var Q = require('q'),
  white = false,
  changeOverlayDefer;

function showOverlay(promise) {
  var overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.className = 'overlay overlay--active';
    if (white) overlay.className += ' overlay--white';
  }
  promise.delay(500).then(hideOverlay);
  return Q.delay(500);
}

function hideOverlay() {
  var overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.className = 'overlay';
    if (white) overlay.className += ' overlay--white';
  }
  white = false;
  if (changeOverlayDefer) {
    changeOverlayDefer.resolve();
    changeOverlayDefer = null;
  }
}

showOverlay.changeOverlay = function(cb) {
  white = true;
  if (changeOverlayDefer) changeOverlayDefer.reject();
  changeOverlayDefer = Q.defer();
  changeOverlayDefer.promise.then(() => Q.delay(500).then(() => {
    if (!changeOverlayDefer) cb();
  }));
};

module.exports = showOverlay;