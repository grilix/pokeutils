define(function () {
  return {
    KEY_ENTER: 13,
    KEY_SPACE: 32,

    selectEach: function (el, selector, callback) {
      Array.prototype.slice.call(
        el.querySelectorAll(selector), 0
      ).forEach(callback.bind(this));
    }
  };
});
