/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let i = 0;
    let target = nums.length;
    while (i < target) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            target--;
        } else i++;
    }
};
