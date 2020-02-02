/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function (S) {
    let lo = 0;
    let hi = S.length;
    return S.split('').map(e => e === 'I' ? lo++ : hi--).concat([lo]);
};
