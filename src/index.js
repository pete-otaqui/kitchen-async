
/**
 * Return a passed-in value asynchronously via a promise,
 * suitable for use with async / await
 * @param {String} val
 * @returns {Promise}
 */
function asyncReturn(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val));
  });
}

/**
 * Returns a promise that will be rejected,
 * suitable for use with async / await
 * @returns {Promise}
 */
function asyncThrow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Async error!')));
  });
}

module.exports = {
  asyncReturn,
  asyncThrow,
};
