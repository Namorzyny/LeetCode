/**
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
const superpalindromesInRange = function (L, R) {
    const lo = ~~Math.sqrt(Number(L));
    const hi = ~~Math.sqrt(Number(R));
    let res = 0;
    gen(hi).forEach(n => {
        const d = (~~Math.log10(n) + 1) * 2;
        if (check(n, d)) {
            const p = genP(n, d);
            if (p <= hi && p >= lo) res++;
        }
        if (check(n, d - 1)) {
            const p = genP(n, d - 1);
            if (p <= hi && p >= lo) res++;
        }
    });
    if (lo < 4 && hi > 2) res++;
    return res;
};

function genP(n, m) {
    let res = n;
    if (m % 2) n = ~~(n / 10);
    while (n !== 0) {
        res = res * 10 + n % 10;
        n = ~~(n / 10);
    }
    return res;
}

function check(n, m) {
    let sum = 0;
    if (m % 2) {
        sum += (n % 10) ** 2;
        n = ~~(n / 10);
    }
    while (n !== 0) {
        sum += (n % 10) ** 2 * 2;
        n = ~~(n / 10);
    }
    return sum < 10;
}

function gen(n) {
    const res = [0, 1, 2];
    let curr = 10;
    let len = 3;
    loop: {
        while (true) {
            for (let i = 0; i < len; i++) {
                res.push(res[i] + curr);
                if (res[i] + curr >= n) break loop;
            }
            for (let i = 0; i < len; i++) {
                res.push(res[i] + 2 * curr);
                if (res[i] + curr >= n) break loop;
            }
            len = res.length;
            curr *= 10;
        }
    }
    return res;
}
