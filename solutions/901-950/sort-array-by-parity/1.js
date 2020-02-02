/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
    let p1 = 0;
    let p2 = A.length - 1;
    while (true) {
        while (A[p1] % 2 === 0) p1++;
        while (A[p2] % 2 === 1) p2--;
        if (p1 < p2) [A[p1], A[p2]] = [A[p2], A[p1]];
        else break;
    }
    return A;
};
