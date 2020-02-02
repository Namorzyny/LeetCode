/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
    return 1162261467 % n === 0 && n > 0;
};
