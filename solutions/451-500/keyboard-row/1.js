/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const map = {};
    ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].forEach((row, i) => row.split('').forEach(key => map[key] = i));
    function isOnOneRow(word) {
        word = word.toLowerCase();
        const row = map[word[0]];
        for (let i = 1; i < word.length; i++) {
            if (map[word[i]] !== row) return false;
        }
        return true;
    }
    const res = [];
    words.forEach(word => {
        if (isOnOneRow(word)) res.push(word);
    });
    return res;
};
