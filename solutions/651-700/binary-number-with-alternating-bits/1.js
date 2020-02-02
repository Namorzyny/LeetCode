/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
    return ((n >> 1) + n).toString(2).indexOf('0') === -1;
};
