/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function (num) {
    if (num < 1) return false;
    while (num % 2 === 0) num >>= 1;
    while (num % 3 === 0) num = ~~(num / 3);
    return 1220703125 % num === 0;
};
