/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
    return (S.match(new RegExp(`[${J}]`, 'g')) || {}).length || 0;
};
