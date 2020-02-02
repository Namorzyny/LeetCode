/**
 * @param {string} S
 * @return {number}
 */
const minFlipsMonoIncr = function (S) {
    let right = S.length - S.split('').reduce((s, n) => s + n * 1, 0);
    let left = 0;
    let min = left + right;
    S.split('').forEach(n => {
        if (n === '1') left++;
        else if (n === '0') right--;
        min = left + right < min ? left + right : min;
    });
    return min;
};
