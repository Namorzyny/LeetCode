/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    const res = [];
    for (let i = left; i <= right; i++) {
        if (check(i)) res.push(i);
    }
    return res;
};

function check(n) {
    let m = n;
    while (m !== 0) {
        if (n % (m % 10) || m % 10 === 0) return false;
        m = ~~(m / 10);
    }
    return true;
}
