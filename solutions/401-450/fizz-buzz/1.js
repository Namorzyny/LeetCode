/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    const list = [,, 'Fizz',, 'Buzz', 'Fizz',,, 'Fizz', 'Buzz',, 'Fizz',,, 'FizzBuzz'];
    // very fast: '', true; fast: 0, undefined; slow: null
    return Array(n).fill('').map((v, i) => list[i % 15] || `${i + 1}`);
};
