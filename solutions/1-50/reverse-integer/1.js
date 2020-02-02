/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        res = 10 * res + x % 10;
        x = ~~(x / 10);
    }
    return res > 2147483646 || res < -2147483647 ? 0 : res;
};
