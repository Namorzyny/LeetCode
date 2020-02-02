/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    const origin = [];
    matrix.forEach(a => origin.push(a.concat([])));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = origin[matrix.length - 1 - j][i];
        }
    }
};

function newNum(x, y, d) {
    return {x: d - 1 - y, y: x};
}
