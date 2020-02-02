/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    return x < 0 ? false : x === reverse(x);
};

function reverse(x) {
    let res = 0;
    while (x !== 0) {
        res = 10 * res + x % 10;
        x = ~~(x / 10);
    }
    return res;
}
