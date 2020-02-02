/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') {
                // check if this slot is the head of battleship on two direction
                if (board[i][j - 1] !== 'X' && (board[i + 1] || [])[j] !== 'X' && (board[i - 1] || [])[j] !== 'X') count++;
                else if ((board[i - 1] || [])[j] !== 'X' && board[i][j + 1] !== 'X' && board[i][j - 1] !== 'X') count++;
            }
        }
    }
    return count;
};
