/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const t = grayCode(n - 1);
    return t.concat(t.concat([]).reverse().map(v => v + 2 ** (n - 1)));
};
