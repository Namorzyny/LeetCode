/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const list = [];
    const target = (nums1.length + nums2.length - 1) / 2;
    const i1 = Math.floor(target);
    const i2 = Math.ceil(target);
    let h1 = 0;
    let h2 = 0;
    while (list.length < i2 + 1) {
        if (nums1[h1] <= nums2[h2] || nums2[h2] === undefined) {
            list.push(nums1[h1]);
            h1++;
        } else if (nums1[h1] > nums2[h2] || nums1[h1] === undefined) {
            list.push(nums2[h2]);
            h2++;
        }
    }
    return (list[i1] + list[i2]) / 2;
};
