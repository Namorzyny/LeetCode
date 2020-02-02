/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
    const map = {};
    order.split('').forEach((letter, n) => map[letter] = String.fromCharCode(97 + n));
    const w2 = words.map(w => w.split('').map(char => map[char]).join(''));
    return w2.join() === w2.sort().join();
};
