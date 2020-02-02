/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function (board) {
    let x, y;
    board.some((row, i) => {
        const j = row.indexOf('R');
        if (j !== -1) {
            [x, y] = [i, j];
            return true;
        }
        return false;
    });
    const row = board[x].filter(cell => cell !== '.');
    const col = board.map(r => r[y]).filter(cell => cell !== '.');
    const rr = row.indexOf('R');
    const rc = col.indexOf('R');
    return (row[rr + 1] === 'p') + (row[rr - 1] === 'p') + (col[rc - 1] === 'p') + (col[rc + 1] === 'p');
};
