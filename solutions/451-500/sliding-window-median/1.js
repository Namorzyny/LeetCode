/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = function (nums, k) {
    const window = new SortedList();
    nums.slice(0, k).forEach(n => window.insert(n));
    const res = [];
    let start = 0;
    let end = k;
    while (end <= nums.length) {
        res.push(window.median());
        window.remove(nums[start]);
        window.insert(nums[end]);
        start++;
        end++;
    }
    return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0]) return 0;
    let lo = 0;
    let hi = nums.length - 1;
    let curr;
    while (lo <= hi) {
        curr = ~~((lo + hi) / 2);
        if (nums[curr] === target) return curr;
        else if (nums[curr] > target) hi = curr - 1;
        else lo = curr + 1;
    }
    return lo;
};

class SortedList {
    constructor() {
        this.list = [];
    }

    insert(n) {
        this.list.splice(this.find(n), 0, n);
    }

    find(n) {
        return searchInsert(this.list, n);
    }

    remove(n) {
        this.list.splice(this.find(n), 1);
    }

    median() {
        if (this.list.length % 2) {
            return this.list[~~(this.list.length / 2)];
        }
        return (this.list[~~(this.list.length / 2)] + this.list[~~(this.list.length / 2) - 1]) / 2;
    }
}
