/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
    return s.length === 0 ? 0 : s.split(' ').filter(s2 => s2 !== '').length;
};
