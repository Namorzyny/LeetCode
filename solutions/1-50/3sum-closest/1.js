/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    let min = Number.POSITIVE_INFINITY;
    let closest;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let p1 = i + 1;
        let p2 = nums.length - 1;
        while (p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];
            const diff = sum - target;
            if (Math.abs(diff) < min) {
                min = Math.abs(diff);
                closest = sum;
            }
            if (diff === 0) return sum;
            else if (diff < 0) p1++;
            else p2--;
        }
    }
    return closest;
};
