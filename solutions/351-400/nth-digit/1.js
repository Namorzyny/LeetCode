/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
    let exp = 0;
    let t = 9;
    while (n > t) {
        n -= t;
        exp++;
        t = 9 * Math.pow(10, exp) * (exp + 1);
    }
    return (~~((n - 1) / (exp + 1)) + Math.pow(10, exp)).toString()[(n - 1) % (exp + 1)] * 1;
};
