/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function (S) {
    let layer = 0;
    let count = 0;
    S.split('').forEach(char => {
        if (char === '(') layer++;
        if (char === ')') {
            if (layer === 0) count++;
            else layer--;
        }
    });
    return layer + count;
};
