/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = function (A) {
    return (new Set(A.map(s => normalization(s)))).size;
};

function normalization(s) {
    return s.split('').reduce((res, char, i) => {
        res[i % 2].push(char);
        return res;
    }, [[], []]).map(list => list.sort().join('')).join('');
}
