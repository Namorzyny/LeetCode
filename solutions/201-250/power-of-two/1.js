/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    if (n < 1) return false;
    while (n !== 1) {
        if (n % 2) return false;
        n = ~~(n / 2);
    }
    return true;
};
