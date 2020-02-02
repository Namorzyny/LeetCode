/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    return nums1.reduce((res, n) => {
        const i = nums2.indexOf(n);
        if (i !== -1) {
            res.push(n);
            nums2.splice(i, 1);
        }
        return res;
    }, []);
};
