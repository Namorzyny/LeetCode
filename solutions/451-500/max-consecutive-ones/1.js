/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    return Math.max.apply(null, nums.join('').split('0').map(s => s.length));
};
