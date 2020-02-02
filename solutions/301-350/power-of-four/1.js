/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function (num) {
    const sqrt = Math.sqrt(num);
    return 1073741824 % num === 0 && sqrt - ~~sqrt === 0;
};
