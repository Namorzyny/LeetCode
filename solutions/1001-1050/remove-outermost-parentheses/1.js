/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function (S) {
    let res = '';
    let layer = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            if (layer) res += S[i];
            layer++;
        } else {
            layer--;
            if (layer) res += S[i];
        }
    }
    return res;
};
