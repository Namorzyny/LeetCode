/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    let max = 0, maxI;
    let water = 0;
    let sum = 0;
    height.forEach((h, i) => {
        if (h >= max) {
            max = h;
            maxI = i;
            sum += water;
            water = 0;
        } else water += max - h;
    });
    max = 0;
    water = 0;
    for (let i = height.length - 1; i >= maxI; i--) {
        if (height[i] >= max) {
            max = height[i];
            sum += water;
            water = 0;
        } else water += max - height[i];
    }
    return sum;
};
