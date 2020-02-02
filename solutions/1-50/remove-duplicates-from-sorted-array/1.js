/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let last = null;
    let i = 0;
    let s = 0;
    while (s < nums.length) {
        if (last !== nums[s]) {nums[i] = nums[s]; last = nums[s]; i++;}
        s++;
    }
    return i;
};
