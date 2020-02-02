/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    let p = 0;
    let max = 0;
    let layer = 0;
    let curr = 0;
    let layer2 = 0;
    let curr2 = 0;
    while (p < s.length) {
        curr++; curr2++;
        if (s[p] === '(') layer++;
        else if (s[p] === ')') layer--;
        if (s[s.length - p - 1] === '(') layer2--;
        else if (s[s.length - p - 1] === ')') layer2++;
        if (layer === 0) max = Math.max(max, curr);
        else if (layer < 0) {
            curr = 0;
            layer = 0;
        }
        if (layer2 === 0) max = Math.max(max, curr2);
        else if (layer2 < 0) {
            curr2 = 0;
            layer2 = 0;
        }
        p++;
    }
    return max;
};
