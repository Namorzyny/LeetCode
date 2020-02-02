/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    const list = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const index = findInsertIndex(list, nums[i]);
        if (index !== undefined) {
            list.splice(index, 0, nums[i]);
            list.splice(3);
        }
    }
    return list[2] === undefined ? list[0] : list[2];
};

function findInsertIndex(list, n) {
    for (let i = list.length - 1; i > -1; i--) {
        if (n <= list[i]) {
            return i + 1 < 3 && n !== list[i] ? i + 1 : undefined;
        }
    }
    return n === list[0] ? undefined : 0;
}
