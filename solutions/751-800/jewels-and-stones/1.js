/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
    const jewels = {};
    for (let i = 0; i < J.length; i++) {
        jewels[J[i]] = 1;
    }
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (jewels[S[i]]) count++;
    }
    return count;
};
