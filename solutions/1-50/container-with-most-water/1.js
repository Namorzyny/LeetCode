/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let i = 0, j = height.length - 1, max = 0;
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] > height[j]) j--; else i++;
    }
    return max;
};
