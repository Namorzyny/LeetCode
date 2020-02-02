/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    const chars1 = {};
    const chars2 = {};
    s.split('').forEach(char => {
        if (chars1[char]) chars1[char]++;
        else chars1[char] = 1;
    });
    t.split('').forEach(char => {
        if (chars2[char]) chars2[char]++;
        else chars2[char] = 1;
    });
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars1[chars[i]] !== chars2[chars[i]]) return chars[i];
    }
};
