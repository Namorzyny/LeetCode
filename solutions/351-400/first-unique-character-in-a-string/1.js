/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    let res = -1;
    const map = {};
    s.split('').forEach(letter => {
        if (map[letter] === undefined) map[letter] = 0;
        map[letter]++;
    });
    Object.keys(map).some(letter => {
        if (map[letter] === 1) {
            res = s.indexOf(letter);
            return true;
        }
        return false;
    });
    return res;
};
