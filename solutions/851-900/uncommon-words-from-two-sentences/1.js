/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A, B) {
    const map = {};
    A.split(' ').forEach(word => {
        if (map[word] === undefined) map[word] = true;
        else if (map[word]) map[word] = false;
    });
    B.split(' ').forEach(word => {
        if (map[word] === true) map[word] = false;
        else if (map[word] === undefined) map[word] = true;
    });
    return Object.keys(map).filter(word => map[word] === true);
};
