/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    s = s.toLowerCase();
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2) {
        if (!isAlphanumeric(s[p1])) {
            p1++;
            continue;
        }
        if (!isAlphanumeric(s[p2])) {
            p2--;
            continue;
        }
        if (s[p1] !== s[p2]) return false;
        p1++;
        p2--;
    }
    return true;
};

function isAlphanumeric(char) {
    return char.charCodeAt() < 123 && char.charCodeAt() > 96 || char.charCodeAt() > 47 && char.charCodeAt() < 58;
}
