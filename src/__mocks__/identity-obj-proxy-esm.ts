/**
 * Modified identity-obj-proxy.
 * [source](https://github.com/keyanzhang/identity-obj-proxy/issues/8)
 */
export default new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        // True instead of false to pretend we're an ES module.
        return true;
      }
      return key;
    },
  },
);
