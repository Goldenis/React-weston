module.exports = {
  componentDidMount() {
    this.resizeIframe();
    window.addEventListener('resize', this.resizeIframe);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeIframe);
  },

  resizeIframe() {
    Array.prototype.forEach.call(document.querySelectorAll('iframe'), iframe => {
      var width = iframe.parentNode.offsetWidth;
      var ratio = iframe.offsetWidth / iframe.offsetHeight;
      iframe.style.width = width + 'px';
      iframe.style.height = width / ratio + 'px';
    });
  }
};