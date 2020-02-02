/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    const sqrt5 = Math.sqrt(5);
    return sqrt5 * (((1 + sqrt5) / 2) ** (n + 1) - ((1 - sqrt5) / 2) ** (n + 1)) / 5;
};
