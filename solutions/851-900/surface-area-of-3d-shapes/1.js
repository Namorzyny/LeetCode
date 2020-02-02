/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function (grid) {
    const list = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];
    return grid.reduce((sum, row, i) => sum + row.reduce((sum2, height, j) => sum2 + (height ? 2 : 0) + list.reduce((sum3, v) => {
        let inc = height - getHeight(grid, i + v[0], j + v[1]);
        if (inc < 0) inc = 0;
        return sum3 + inc;
    }, 0), 0), 0);
};

function getHeight(grid, i, j) {
    return grid[i] ? grid[i][j] ? grid[i][j] : 0 : 0;
}
