/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    const l1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const l2 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const l3 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const l4 = ['', 'M', 'MM', 'MMM'];
    let res = '';
    res = l1[num % 10] + res; num = ~~(num / 10);
    res = l2[num % 10] + res; num = ~~(num / 10);
    res = l3[num % 10] + res; num = ~~(num / 10);
    res = l4[num % 10] + res;
    return res;
};
