/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    let res = '';
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
    while (num1[p1] !== undefined || num2[p2] !== undefined) {
        let sum = carry;
        if (num1[p1] !== undefined) sum += num1[p1].charCodeAt() - 48;
        if (num2[p2] !== undefined) sum += num2[p2].charCodeAt() - 48;
        carry = 0;
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }
        res = sum.toString() + res;
        p1--;
        p2--;
    }
    return carry ? `1${res}` : res;
};
