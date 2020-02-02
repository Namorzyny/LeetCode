/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (nums, r, c) {
    if (nums.length * nums[0].length !== r * c) return nums;
    const res = [];
    nums.reduce((total, row) => total.concat(row), []).forEach((value, i) => {
        if (i % c === 0) res.push([]);
        res[res.length - 1].push(value);
    });
    return res;
};
