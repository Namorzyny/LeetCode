/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
    let element;
    for (let i = 0; i < nums.length; i++) if (nums[i + 1] - nums[i] < 0) {
        if (element === undefined) element = i;
        else return false;
    }
    if (element === undefined) return true;
    if (nums[element - 1] > nums[element + 1] && nums[element] > nums[element + 2]) return false;
    return true;
};
