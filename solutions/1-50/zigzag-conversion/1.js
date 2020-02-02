/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows < 2) return s;
    const list = [];
    let res = '';
    for (let i = 0; i < numRows; i++) list.push([]);
    let index = 0;
    let step = -1;
    let row = 0;
    while (index < s.length) {
        list[row].push(s[index]);
        if (row === numRows - 1 || row === 0) step *= -1;
        row += step;
        index++;
    }
    list.forEach(r => {
        res += r.join('');
    });
    return res;
};
