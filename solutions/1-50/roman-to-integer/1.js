/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let last = 10000;
    let res = 0;
    let t;
    for (let i = 0; i < s.length; i++) {
        t = map[s[i]];
        res += t;
        if (last < t) {
            res -= 2 * last;
        }
        last = t;
    }
    return res;
};
