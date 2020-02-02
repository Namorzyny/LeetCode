/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
    this.array = nums;
    this.sums = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        this.sums.push(sum);
    }
    this.sums[-1] = 0;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.sumList[j] - this.sumList[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
