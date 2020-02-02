/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function (A) {
    let lo = 0;
    let hi = A.length - 1;
    let curr;
    while (lo <= hi) {
        curr = ~~((lo + hi) / 2);
        if (check(A, curr) === 1) lo = curr + 1;
        if (check(A, curr) === -1) hi = curr - 1;
        if (check(A, curr) === 0) return curr;
    }
    return -1;
};

function check(A, i) {
    if (i === 0 || i === A.length - 1) return 0;
    else if (A[i - 1] < A[i] && A[i] < A[i + 1]) return 1;
    else if (A[i - 1] > A[i] && A[i] > A[i + 1]) return -1;
    return 0;
}
