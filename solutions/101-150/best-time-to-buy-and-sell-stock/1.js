/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    return prices.reduce((state, price) => {
        if (price < state.min) state.min = price;
        if (price - state.min > state.max) state.max = price - state.min;
        return state;
    }, {min: Infinity, max: 0}).max;
};
