/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    let res = '1';
    while (n > 1) {
        res = next(res);
        n--;
    }
    return res;
};

function next(s) {
    let count = '';
    let curr = '';
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (curr !== s[i]) {
            res += count;
            res += curr;
            curr = s[i];
            count = 0;
        }
        count++;
    }
    res += count;
    res += curr;
    return res;
}
