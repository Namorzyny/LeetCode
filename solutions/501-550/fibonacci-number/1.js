/**
 * @param {number} N
 * @return {number}
 */
const fib = function (N) {
    let n1 = 1;
    let n2 = 0;
    while (N > 0) {
        [n1, n2] = [n2, n1 + n2];
        N--;
    }
    return n2;
};
