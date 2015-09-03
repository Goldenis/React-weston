var P = {
  path: '/',
  scroll: 0
};

module.exports = {
  set(p) {
    P = {
      path: p,
      scroll: window.scrollY
    };
  },

  get() {
    return P;
  }
};