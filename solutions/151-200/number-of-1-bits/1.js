/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let count = 0;
    while (n !== 0) {
        count += n % 2;
        n = ~~(n / 2);
    }
    return count;
};
