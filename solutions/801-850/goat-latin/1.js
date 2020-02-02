/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function (S) {
    return S.split(' ').map((word, i) => `${'aeiou'.indexOf(word[0].toLowerCase()) === -1 ? word.substr(1) + word[0] : word}maa${'a'.repeat(i)}`).join(' ');
};
