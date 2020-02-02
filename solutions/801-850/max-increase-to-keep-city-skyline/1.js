/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function (grid) {
    const lines = [];
    const columns = [];
    grid.forEach(line => {
        lines.push(Math.max.apply(null, line));
    });
    for (let i = 0; i < grid[0].length; i++) {
        let max = 0;
        grid.forEach(line => {
            max = Math.max(line[i], max);
        });
        columns.push(max);
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            count += Math.min(lines[i], columns[j]) - grid[i][j];
        }
    }
    return count;
};
