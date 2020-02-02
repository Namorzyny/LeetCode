/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const map = {};
    nums1.forEach(n => {
        if (map[n]) map[n]++;
        else map[n] = 1;
    });
    return nums2.filter(n => {
        if (map[n]) {
            map[n]--;
            return true;
        }
        return false;
    });
};
