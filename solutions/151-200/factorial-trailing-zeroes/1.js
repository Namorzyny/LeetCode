/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
    if (n < 5) return 0;
    return Array(Math.floor(Math.log(n) / Math.log(5))).fill(0).map((v, i) => 5 ** (i + 1)).reduce((sum, v) => sum + Math.floor(n / v), 0);
};
