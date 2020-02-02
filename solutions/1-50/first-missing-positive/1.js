/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums.indexOf(i + 1) === -1) return i + 1;
        i++;
    }
    return nums.length + 1;
};
