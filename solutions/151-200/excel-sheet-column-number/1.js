/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
    return s.split('').reduce((sum, char) => sum * 26 + char.charCodeAt() - 64, 0);
};
