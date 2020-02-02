/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let max = 0;
    let start = 0;
    let i = 0;
    while (i < s.length) {
        const find = s.substring(start, i).indexOf(s[i]);
        if (find > -1) start = start + find + 1;
        max = Math.max(max, i - start + 1);
        i++;
    }
    return max;
};
