/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const map = {};
    const res = [];
    nums1.forEach(num => map[num] = true);
    nums2.forEach(num => {
        if (map[num]) {
            res.push(num);
            map[num] = false;
        }
    });
    return res;
};
