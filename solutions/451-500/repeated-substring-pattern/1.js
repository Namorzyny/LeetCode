/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    for (let i = 0; i < ~~(s.length / 2); i++) {
        if (testRepeat(s, s.substring(0, i + 1))) return true;
    }
    return false;
};

function testRepeat(s, p) {
    if (s.length % p.length === 0) {
        for (let i = 0; i < s.length; i += p.length) {
            if (s.substr(i, p.length) !== p) return false;
        }
        return true;
    }
    return false;
}
