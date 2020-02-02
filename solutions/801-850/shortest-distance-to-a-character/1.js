/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function (S, C) {
    let i = 0;
    let previous = -Infinity;
    let next = S.indexOf(C, i);
    const res = [];
    while (i < S.length) {
        if (i !== next) {
            res.push(Math.min(i - previous, next - i));
        } else {
            res.push(0);
            previous = i;
            next = S.indexOf(C, i + 1);
            if (next === -1) next = Infinity;
        }
        i++;
    }
    return res;
};
