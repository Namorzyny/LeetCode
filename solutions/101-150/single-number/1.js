/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    return nums.reduce((xor, num) => xor ^ num);
};
