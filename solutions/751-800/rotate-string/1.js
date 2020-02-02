/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function (A, B) {
    return A.length === B.length ? (A + A).indexOf(B) !== -1 : false;
};
