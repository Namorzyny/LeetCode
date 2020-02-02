/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        const map = {};
        let chars = '';
        test: {
            for (let j = 0; j < words[i].length; j++) {
                if (!map[pattern[j]] && !chars.includes(words[i][j])) {
                    map[pattern[j]] = words[i][j];
                    chars += words[i][j];
                } else if (words[i][j] !== map[pattern[j]]) break test;
            }
            res.push(words[i]);
        }
    }
    return res;
};
