/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
    const list = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    const set = new Set();
    words.forEach(word => {
        let res = '';
        word.split('').forEach(letter => {
            res += list[letter.charCodeAt() - 97];
        });
        set.add(res);
    });
    return set.size;
};
