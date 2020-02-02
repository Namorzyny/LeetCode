/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
    const xor = a ^ b;
    const and = a & b;
    if (and === 0) return xor;
    return getSum(xor, and << 1);
};
