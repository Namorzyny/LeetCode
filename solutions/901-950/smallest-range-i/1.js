/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function (A, K) {
    const min = Math.min.apply(null, A) + K;
    const max = Math.max.apply(null, A) - K;
    return max > min ? max - min : 0;
};
