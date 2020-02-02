/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
    const r = /^(1[01]|0)*0$/;
    return r.test(bits.join(''));
};
