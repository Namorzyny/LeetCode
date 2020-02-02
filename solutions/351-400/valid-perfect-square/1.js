/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    const t = mySqrt(num);
    return t * t === num;
};

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let n = 1;
    while (n * n !== x) {
        const next = findNext(n, x);
        if (next === n) break;
        n = next;
    }
    return n;
};

function findNext(n, x) {
    return ~~((x + n + n * n) / (2 * n + 1));
}
