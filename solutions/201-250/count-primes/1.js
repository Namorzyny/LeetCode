/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    if (n < 3) return 0;
    const primes = [2];
    let i = 3;
    while (i < n) {
        check: {
            const target = Math.sqrt(i);
            for (let j = 0; primes[j] <= target; j++) {
                if (i % primes[j] === 0) break check;
            }
            primes.push(i);
        }
        i += 2;
    }
    return primes.length;
};
