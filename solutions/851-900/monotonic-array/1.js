/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {
    if (A.length < 3) return true;
    const list = A.map((n, i) => n - A[i + 1]);
    list.pop();
    return Math.max.apply(null, list) * Math.min.apply(null, list) >= 0;
};
