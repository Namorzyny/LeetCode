/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0]) return 0;
    let lo = 0;
    let hi = nums.length - 1;
    let curr;
    while (lo <= hi) {
        curr = ~~((lo + hi) / 2);
        if (nums[curr] === target) return curr;
        else if (nums[curr] > target) hi = curr - 1;
        else lo = curr + 1;
    }
    return lo;
};
