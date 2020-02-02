/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const findLUSlength = function (a, b) {
    return a === b ? -1 : a.length > b.length ? a.length : b.length;
};
