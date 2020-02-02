/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    while (n > 9) {
        n = squareSum(n);
    }
    if (n === 1 || n === 7) return true;
    return false;
};

function squareSum(n) {
    let sum = 0;
    while (n !== 0) {
        const d = n % 10;
        sum += d * d;
        n = ~~(n / 10);
    }
    return sum;
}
