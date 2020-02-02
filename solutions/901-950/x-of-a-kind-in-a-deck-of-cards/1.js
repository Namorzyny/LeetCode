/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
    const map = {};
    deck.forEach(n => map[n] = map[n] ? map[n] + 1 : 1);
    return Object.keys(map).map(n => map[n]).reduce((total, n) => gcd(total, n)) > 1;
};

function gcd(a, b) {
    if (a === 0) return b;
    while (b !== 0) if (a > b) a -= b; else b -= a;
    return a;
}
