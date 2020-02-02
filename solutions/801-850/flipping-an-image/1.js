/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function (A) {
    for (let i = 0; i < A.length; i++) {
        const row = A[i];
        for (let j = 0; j < row.length; j++) {
            if (j < row.length / 2) {
                const temp = row[j];
                row[j] = row[row.length - 1 - j];
                row[row.length - 1 - j] = temp;
            }
            row[j] = row[j] ? 0 : 1;
        }
    }
    return A;
};
