/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    let xor = x ^ y;
    let count = 0;
    while (xor !== 0) {
        if (xor % 2) count++;
        xor = ~~(xor / 2);
    }
    return count;
};
