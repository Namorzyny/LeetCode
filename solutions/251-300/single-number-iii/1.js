/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
    const map = {};
    nums.forEach(n => {
        if (map[n]) delete map[n];
        else map[n] = true;
    });
    return Object.keys(map).map(n => ~~n);
};
