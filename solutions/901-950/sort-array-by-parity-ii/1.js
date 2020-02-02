/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function (A) {
    let p1 = 0;
    let p2 = A.length - 1;
    while (1) {
        while (A[p1] % 2 === 0) p1 += 2;
        while (A[p2] % 2 === 1) p2 -= 2;
        if (!(p1 < A.length && p2 < A.length)) break;
        [A[p1], A[p2]] = [A[p2], A[p1]];
    }
    return A;
};
