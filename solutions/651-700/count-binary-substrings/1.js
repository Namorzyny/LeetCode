/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
    const list = [0];
    let curr = s[0];
    let count = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== curr) {
            list.push(i);
            curr = s[i];
        }
    }
    list.push(s.length);
    for (let i = 1; i < list.length - 1; i++) {
        count += Math.min(list[i + 1] - list[i], list[i] - list[i - 1]);
    }
    return count;
};
