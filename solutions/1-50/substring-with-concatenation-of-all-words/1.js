/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
    const length = words.reduce((sum, word) => sum + word.length, 0);
    if (length > s.length) return [];
    const searchAt = [];
    Array.from(new Set(words)).forEach(word => {
        let start = 0;
        while (true) {
            const t = s.indexOf(word, start);
            if (t < 0) break;
            searchAt.push(t);
            start = t + 1;
        }
    });
    return Array.from(searchAt).filter(p => isConcatenation(s.substr(p, length), words));
};

function isConcatenation(s, words) {
    words = Array.from(words);
    while (words.length > 0) {
        let c = 0;
        for (let i = 0; i < words.length; i++) {
            if (isStartWith(s, words[i])) {
                c = 1;
                s = s.substr(words[i].length);
                words.splice(i, 1);
                break;
            }
        }
        if (c === 0) return false;
    }
    return s === '';
}

function isStartWith(s1, s2) {
    return s1.substr(0, s2.length) === s2;
}
