/**
 * @param {number[][]} A
 * @return {number}
 */
const matrixScore = function (A) {
    for (let i = 0; i < A.length; i++) {
        if (!A[i][0]) flipRow(A, i);
    }
    for (let i = 1; i < A[0].length; i++) {
        if (shouldColumnFlip(A, i)) flipColumn(A, i);
    }
    return A.reduce((sum, row) => sum + parseInt(row.join(''), 2), 0);
};

function flipRow(A, n) {
    for (let i = 0; i < A[n].length; i++) {
        A[n][i] = !A[n][i] + 0;
    }
}

function flipColumn(A, n) {
    for (let i = 0; i < A.length; i++) {
        A[i][n] = !A[i][n] + 0;
    }
}

function shouldColumnFlip(A, n) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i][n]) count++;
    }
    return count < A.length - count;
}
