/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function (S) {
    const first = {};
    const last = {};
    S.split('').forEach((letter, index) => {
        if (first[letter] === undefined) first[letter] = index;
        last[letter] = index;
    });
    const letters = Object.keys(first);
    const res = [];
    let start = 0;
    let max = 0;
    for (let i = 0; i < letters.length; i++) {
        max = Math.max(max, last[letters[i]]);
        if (first[letters[i + 1]] > max) {
            res.push(max - start + 1);
            start = max + 1;
            max = 0;
        }
    }
    res.push(max - start + 1);
    return res;
};
