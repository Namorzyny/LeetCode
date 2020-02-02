/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    else if (strs.length === 1) return strs[0];
    const target = Math.min.apply(null, strs.map(str => str.length));
    let res;
    check: {
        for (let i = 0; i < target; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== strs[0][i]) {
                    res = strs[0].substring(0, i);
                    break check;
                }
            }
        }
        res = strs[0].substring(0, target);
    }
    return res;
};
