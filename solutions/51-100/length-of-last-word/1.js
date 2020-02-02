/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const chars = s.split(' ');
    let t = chars.pop();
    while (t === '') t = chars.pop();
    return t === undefined ? 0 : t.length;
};
