/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
    while (num > 9) num = add(num);
    return num;
};

function add(n) {
    let sum = 0;
    while (n !== 0) {
        sum += n % 10;
        n = ~~(n / 10);
    }
    return sum;
}
