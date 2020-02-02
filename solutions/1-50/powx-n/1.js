/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n *= -1;
    }
    let res = 1;
    let prod = x;
    let curr = n;
    while (curr !== 0) {
        if (curr % 2) {
            res *= prod;
        }
        prod *= prod;
        curr = ~~(curr / 2);
    }
    return res;
};
