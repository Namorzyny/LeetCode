/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
    const bits = [];
    while (n !== 0) {
        bits.push(n % 2);
        n = ~~(n / 2);
    }
    return parseInt(bits.join('') || '0', 2) * Math.pow(2, 32 - bits.length);
};
