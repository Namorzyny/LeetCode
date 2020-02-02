/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    return nums.length * (nums.length + 1) / 2 - nums.reduce((sum, n) => sum + n);
};
