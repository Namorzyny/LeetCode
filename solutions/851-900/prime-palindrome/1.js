/**
 * @param {number} N
 * @return {number}
 */
const primePalindrome = function (N) {
    if (N < 3) return 2;
    let i = ~~Math.log10(N) + 1;
    if (i % 2 === 0 && i > 2) i++;
    while (true) {
        const r = ~~((i + 1) / 2);
        const lo = Math.pow(10, r - 1);
        const hi = lo * 10;
        for (let j = lo; j < hi; j++) {
            const curr = palindrome(j, i);
            if (curr >= N) if (isPrime(curr)) return curr;
        }
        i++;
    }
};

const isPrime = (() => {
    const primes = [2, 3];
    return n => {
        const prime = true;
        const target = Math.sqrt(n);
        for (let i = 0; i < primes.length; i++) {
            if (primes[i] > target) return true;
            if (n % primes[i] === 0) return false;
        }
        if (target > primes.slice(-1)[0]) {
            let i = primes.slice(-1)[0] + 2;
            while (i <= target) {
                if (isPrime(i)) {
                    primes.push(i);
                    if (n % i === 0) return false;
                }
                i += 2;
            }
            return true;
        }
        return true;
    };
})();

function palindrome(n, d) {
    const c = ~~(d / 2);
    const res = n * Math.pow(10, c) + reverse(n) % Math.pow(10, c);
    return res;
}

const reverse = function (x) {
    let res = 0;
    while (x !== 0) {
        res = 10 * res + x % 10;
        x = ~~(x / 10);
    }
    return res;
};
