/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
    let next = 0;
    let curr = 0;
    let jumps = 0;
    const end = nums.length - 1;
    for (let i = 0; i < end; i++) {
        next = Math.max(next, nums[i] + i);
        if (i === curr) {
            jumps++;
            curr = next;
        }
    }
    return jumps;
};
