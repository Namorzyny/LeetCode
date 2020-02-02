/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
    const map = {};
    const res = [];
    nums.forEach(num => {
        if (!map[num]) map[num] = 1;
        else res.push(num);
    });
    return res;
};
