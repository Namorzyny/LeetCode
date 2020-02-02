/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                if (!(i - 1 >= 0) || !grid[i - 1][j]) count++;
                if (!(i + 1 < grid.length) || !grid[i + 1][j]) count++;
                if (!(j - 1 >= 0) || !grid[i][j - 1]) count++;
                if (!(j + 1 < grid[0].length) || !grid[i][j + 1]) count++;
            }
        }
    }
    return count;
};
