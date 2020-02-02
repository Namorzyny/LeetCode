function toPositive(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) A[i] *= -1;
        else return i;
    }
    return A.length;
}

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
    let p1 = toPositive(A);
    let p2 = p1 - 1;
    const res = [];
    while (A[p1] !== undefined || A[p2] !== undefined) {
        if (A[p1] === undefined) {
            res.push(A[p2] ** 2);
            p2--;
        } else if (A[p2] === undefined) {
            res.push(A[p1] ** 2);
            p1++;
        } else if (A[p1] > A[p2]) {
            res.push(A[p2] ** 2);
            p2--;
        } else {
            res.push(A[p1] ** 2);
            p1++;
        }
    }
    return res;
};
