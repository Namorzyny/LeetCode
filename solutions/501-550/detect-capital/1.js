/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
    const p = /^([A-Z]+|[A-Z]?[a-z]+)$/;
    return p.test(word);
};
