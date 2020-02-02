/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = function (a, b) {
    const ra = a.split('+')[0];
    const ia = a.split('+')[1].split('i')[0];
    const rb = b.split('+')[0];
    const ib = b.split('+')[1].split('i')[0];
    return `${ra * rb - ia * ib}+${ra * ib + rb * ia}i`;
};
