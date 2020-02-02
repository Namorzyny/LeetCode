/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        let p1 = i + 1;
        let p2 = nums.length - 1;
        while (p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];
            if (sum === 0) {
                res.push([nums[i], nums[p1], nums[p2]]);
                do {p1++;}
                while (nums[p1] === nums[p1 - 1]);
            } else if (sum < 0) p1++;
            else p2--;
        }
    }
    return res;
};
