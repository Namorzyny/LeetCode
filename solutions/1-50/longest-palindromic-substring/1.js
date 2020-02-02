/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let max = '';
    let i = 0;
    while (i < s.length - 0.5 - max.length / 2) {
        const test = findMaxAt(s, i);
        max = test.length > max.length ? test : max;
        i += 0.5;
    }
    return max;
};

function findMaxAt(s, i) {
    let start = Math.floor(i);
    let end = Math.ceil(i);
    while (s[start] !== undefined && s[end] !== undefined) {
        if (s[start] === s[end]) {
            start--;
            end++;
        } else break;
    }
    start++;
    end--;
    return end < start ? '' : s.substring(start, end + 1);
}
