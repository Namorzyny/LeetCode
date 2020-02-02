/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    if (n < 3) return 0;
    const list = new Uint8Array(~~(n / 2) - 1);
    let start = 0;
    const target = ~~Math.sqrt(n);
    while (start < target) {
        const step = start + start + 3;
        for (let i = start + step; i < list.length; i += step) list[i] = 1;
        do start++; while (list[start] === 1);
    }
    return ~~(n / 2) - list.reduce((sum, m) => sum + m);
};
