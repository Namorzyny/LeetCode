/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    k %= nums.length;
    const t = nums.concat(nums).slice(nums.length - k, 2 * nums.length - k);
    nums.forEach((num, i) => nums[i] = t[i]);
};
