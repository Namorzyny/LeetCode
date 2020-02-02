/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function (candies) {
    const kinds = (new Set(candies.slice(0, candies.length / 2))).size;
    return kinds < candies.length / 2 ? kinds : candies.length / 2;
};
