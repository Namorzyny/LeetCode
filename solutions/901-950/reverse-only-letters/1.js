/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function (S) {
    let p1 = 0;
    let p2 = S.length - 1;
    const l = S.split('');
    while (1) {
        while (p1 < p2 && !isLetter(l[p1])) p1++;
        while (p1 < p2 && !isLetter(l[p2])) p2--;
        if (p1 >= p2) break;
        [l[p1], l[p2]] = [l[p2], l[p1]];
        p1++;
        p2--;
    }
    return l.join('');
};

function isLetter(char) {
    const c = char.charCodeAt();
    return c > 64 && c < 91 || c > 96 && c < 123;
}
