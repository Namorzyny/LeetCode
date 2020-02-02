/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
    let res = 0;
    let base = 1;
    while (num !== 0) {
        res += num % 7 * base;
        base *= 10;
        num = ~~(num / 7);
    }
    return res.toString();
};
