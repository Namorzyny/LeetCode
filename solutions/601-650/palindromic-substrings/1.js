/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i += 0.5) {
        count += countPalindromicAt(s, i);
    }
    return count;
};

function countPalindromicAt(s, i) {
    let count = 0;
    let start = Math.floor(i);
    let end = Math.ceil(i);
    while (s[start] !== undefined && s[end] !== undefined) {
        if (s[start] === s[end]) {
            count++;
            start--;
            end++;
        } else break;
    }
    return count;
}
