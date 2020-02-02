/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
    let x = 0, y = 0;
    moves.split('').forEach(step => {
        if (step === 'U') y++;
        else if (step === 'D') y--;
        else if (step === 'L') x--;
        else if (step === 'R') x++;
    });
    return x === 0 && y === 0;
};
