/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let max = nums[0];
    nums.reduce((sum, val) => {
        sum = sum < 0 ? val : sum + val;
        max = sum > max ? sum : max;
        return sum;
    });
    return max;
};
