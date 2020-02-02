/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function (A, B) {
    if (A.indexOf(B) !== -1) return 1;
    if ((A + A).indexOf(B) !== -1) return 2;
    const find = B.indexOf(A);
    if (find === -1) return -1;
    const target = B.length - find;
    const remain = target % A.length;
    if (find !== 0 && B.substr(0, find) !== A.substr(-find)) return -1;
    if (remain !== 0 && B.substr(-remain) !== A.substr(0, remain)) return -1;
    const res = ~~(target / A.length);
    A = A.repeat(res);
    return B.indexOf(A) !== -1 ? res + (find !== 0 ? 1 : 0) + (remain !== 0 ? 1 : 0) : -1;
};
