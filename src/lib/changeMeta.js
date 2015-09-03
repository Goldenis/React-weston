var globalMeta = {},
  path = require('path');

function changeMeta({ title, image, url, content }) {
  title = dequote(`${title ? title + ' | ' : ''}Weston James Palmer`);
  image = image ? window.location.protocol + '//' + path.join(window.location.host, image) : '';
  url = url ? encodeURIComponent(url) : window.location.href;
  content = content || '';
  globalMeta = {title, image, url, content};
  document.title = title;
  //changeMetaTags({title, image, url});
}

changeMeta.get = function() {
  return globalMeta;
};

function dequote(str) {
  return str.replace(/"/g, '\\"');
}

function changeMetaTags({ title, image, url }) {
  if (!changeMeta.enabled) {
    changeMeta.title = document.createElement('meta');
    changeMeta.title.setAttribute('property', 'og:title');
    changeMeta.title.setAttribute('content', title);
    document.head.appendChild(changeMeta.title);

    changeMeta.image = document.createElement('meta');
    changeMeta.image.setAttribute('property', 'og:image');
    changeMeta.image.setAttribute('content', image);
    document.head.appendChild(changeMeta.image);

    changeMeta.url = document.createElement('meta');
    changeMeta.url.setAttribute('property', 'og:url');
    changeMeta.url.setAttribute('content', url);
    document.head.appendChild(changeMeta.url);

    changeMeta.enabled = true;
  } else {
    changeMeta.title.setAttribute('content', title);
    changeMeta.image.setAttribute('content', image);
    changeMeta.url.setAttribute('content', url);
  }
}

changeMetaTags.enabled = false;
changeMetaTags.title = null;
changeMetaTags.url = null;
changeMetaTags.image = null;

module.exports = changeMeta;