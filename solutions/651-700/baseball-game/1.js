/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
    const score = [];
    ops.forEach(op => {
        if (op === 'C') score.pop();
        else if (op === 'D') score.push(2 * score[score.length - 1]);
        else if (op === '+') score.push(score[score.length - 1] + score[score.length - 2]);
        else score.push(op * 1);
    });
    return score.reduce((sum, val) => sum + val);
};
