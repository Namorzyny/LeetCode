/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = function (deck) {
    return deck.sort((a, b) => b - a).reduce((res, val) => {
        if (res.length) res.unshift(res.pop());
        res.unshift(val);
        return res;
    }, []);
};
