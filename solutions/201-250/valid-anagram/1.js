/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    const map = {};
    if (s.length > t.length) [s, t] = [t, s];
    s.split('').forEach(char => {
        if (map[char]) map[char]++;
        else map[char] = 1;
    });
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) map[t[i]]--;
        else return false;
    }
    return true;
};
