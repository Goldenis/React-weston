var store = {}, watchers = [];

module.exports = {
  getStore() {
    return store;
  },

  setStore(data) {
    store = data;

    watchers.forEach(watcher => watcher());
  },

  onChange(watcher) {
    watchers.push(watcher);
  },

  removeOnChange(watcher) {
    var index = watchers.indexOf(watcher);
    watchers.splice(index, 1);
  }
};