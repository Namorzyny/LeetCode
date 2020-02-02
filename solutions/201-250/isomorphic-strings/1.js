/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    return test(s, t) && test(t, s);
};

function test(s, t) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = t[i];
        else if (map[s[i]] !== t[i]) return false;
    }
    return true;
}
