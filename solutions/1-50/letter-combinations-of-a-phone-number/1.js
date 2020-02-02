/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const list = [,, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [''];
    digits.split('').forEach(digit => {
        const before = res;
        res = [];
        list[digit].split('').forEach(letter => {
            before.forEach(s => {
                res.push(s + letter);
            });
        });
    });
    return res;
};
