/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function (A) {
    const map = {};
    for (let i = 0; i < A.length; i++) {
        const e = A[i];
        if (map[e]) return e;
        map[e] = 1;
    }
};
