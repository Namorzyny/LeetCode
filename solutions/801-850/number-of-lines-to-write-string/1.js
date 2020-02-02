/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function (widths, S) {
    if (S === '') return [0, 0];
    let lines = 1;
    let units = 0;
    S.split('').forEach(letter => {
        const curr = widths[letter.charCodeAt() - 97];
        if (units + curr > 100) {
            units = curr;
            lines++;
        } else {
            units += curr;
        }
    });
    return [lines, units];
};
