/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    const res = [];
    find([], 0, res, n);
    return res.map(queens => queens.map(queen => {
        const row = Array(n).fill('.');
        row[queen] = 'Q';
        return row.join('');
    }));
};

function find(queens, row, out, n) {
    if (row === n) {
        out.push(queens.concat([]));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (!canAttack(queens, row, i)) {
            queens.push(i);
            find(queens, row + 1, out, n);
            queens.pop();
        }
    }
}

function canAttack(list, x, y) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === y || x - i === y - list[i] || x - i === list[i] - y) return true;
    }
    return false;
}
