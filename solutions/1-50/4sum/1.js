/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] > target && nums[i] >= 0) break;
        let flag = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[j - 1] && flag !== 0) continue;
            flag = 1;
            const diff = target - nums[i] - nums[j];
            if (diff < 0 && nums[j] >= 0) break;
            let p1 = j + 1;
            let p2 = nums.length - 1;
            while (p1 < p2) {
                const diff2 = diff - nums[p1] - nums[p2];
                if (diff2 === 0) {
                    res.push([nums[i], nums[j], nums[p1], nums[p2]]);
                    do {p1++;}
                    while (nums[p1] === nums[p1 - 1]);
                } else if (diff2 > 0) p1++;
                else p2--;
            }
        }
    }
    return res;
};
