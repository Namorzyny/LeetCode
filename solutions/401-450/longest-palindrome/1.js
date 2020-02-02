/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    const map = {};
    s.split('').forEach(char => {
        if (map[char]) map[char]++;
        else map[char] = 1;
    });
    let res = 0;
    let haveOdd = false;
    Object.keys(map).forEach(char => {
        if (map[char] % 2) {
            res += map[char] - 1;
            haveOdd = true;
        } else res += map[char];
    });
    return res + (haveOdd ? 1 : 0);
};
