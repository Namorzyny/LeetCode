/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
    if (n === 0) return '';
    let letter = String.fromCharCode(n % 26 + 64);
    if (letter === '@') letter = 'Z';
    return convertToTitle(~~((n - letter.charCodeAt() + 64) / 26)) + letter;
};
