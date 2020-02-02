/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function (A) {
    return A[0].map((val, index) => A.reduce((newRow, row) => newRow.concat([row[index]]), []));
};
