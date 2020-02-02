/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    return ~num & (2 << ~~Math.log2(num)) - 1;
};
