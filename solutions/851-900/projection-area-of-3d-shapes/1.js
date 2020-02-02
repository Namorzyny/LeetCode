/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let maxX = 0;
        let maxY = 0;
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j]) count++;
            maxX = grid[i][j] > maxX ? grid[i][j] : maxX;
            maxY = grid[j][i] > maxY ? grid[j][i] : maxY;
        }
        count += maxX + maxY;
    }
    return count;
};
