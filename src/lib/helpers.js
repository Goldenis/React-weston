exports.first = function (n = 1, arr = []) {
  return arr.slice(0, n);
};

exports.partition = function (n, arr) {
  var length = arr.length,
    index = 0,
    chunkIndex = 0,
    result = [];

  while(length-- > 0) {
    if (index >= n) {
      index = 0;
      chunkIndex++;
    }
    var chunk = result[chunkIndex];
    if (!chunk) chunk = result[chunkIndex] = [];
    chunk[index] = arr[index + n * chunkIndex];
    index++;
  }

  return result;
};

exports.findWhere = function(obj, arr) {
  var result, objKeys = Object.keys(obj);

  for (var val of arr) {
    var equals = true;

    for (var key of objKeys) {
      if (obj[key] !== val[key]) {
        equals = false;
        break;
      }
    }

    if (equals) {
      result = val;
      break;
    }
  }

  return result;
};

exports.range = function(from, to) {
  var result = [from];
  while (from++ !== to) result.push(from);
  return result;
};

exports.isMobile = function() {
  return /iPod|iPhone|iPad|Android/i.test(window.navigator.userAgent);
};

exports.debounce = function(fn, ms = 100, immediate = false) {
  var timeout = null;

  return function(...args) {
    if (immediate) fn.apply(this, args);

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};

exports.showFooter = function(bool) {
  var footer = document.querySelector('.footer');

  if (footer) {
    footer.style.display = bool ? 'block' : 'none';
  }
};