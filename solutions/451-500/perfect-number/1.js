/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
    const nextPrime = (() => {
        const gen = genPrime();
        return () => gen.next().value;
    })();
    while (1) {
        const currPrime = nextPrime();
        const curr = 2 ** (currPrime - 1) * (2 ** currPrime - 1);
        if (curr === num) return true;
        else if (curr > num) return false;
    }
};

function *genPrime() {
    const primes = [2];
    let curr = 3;
    while (1) {
        yield primes[primes.length - 1];
        check: {
            for (let i = 0; i < primes.length; i++) {
                if (curr % primes[i] === 0) break check;
            }
            primes.push(curr);
        }
        curr += 2;
    }
}
