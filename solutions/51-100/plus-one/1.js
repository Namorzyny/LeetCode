/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let i = digits.length - 1;
    digits[i]++;
    while (i > -1) {
        if (digits[i] === 10) {
            digits[i] = 0;
            if (i === 0) digits.splice(0, 0, 1);
            else digits[i - 1]++;
        }
        i--;
    }
    return digits;
};
