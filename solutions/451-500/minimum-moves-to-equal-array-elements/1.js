/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
    const min = Math.min.apply(null, nums);
    return nums.reduce((sum, n) => sum + n - min, 0);
};
