/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function (S) {
    S = S.toLowerCase();
    const res = [S];
    S.split('').map(char => char.charCodeAt()).forEach((code, index) => {
        if (code > 96 && code < 123) {
            res.forEach(str => {
                res.push(toUpper(str, index));
            });
        }
    });
    return res;
};

function toUpper(s, i) {
    const l = s.split('');
    l[i] = l[i].toUpperCase();
    return l.join('');
}
