/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    let duplicated, sum = 0;
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) duplicated = nums[i];
        map[nums[i]] = true;
        sum += nums[i];
    }
    return duplicated ? [duplicated, nums.length * (nums.length + 1) / 2 - sum + duplicated] : [0, 0];
};
