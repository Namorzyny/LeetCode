/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
    if (num < 1) return [0];
    const res = [0];
    let count = 1;
    check: {
        while (true) {
            const range = res.length;
            for (let i = 0; i < range; i++) {
                res.push(res[i] + 1);
                count++;
                if (count > num) break check;
            }
        }
    }
    return res;
};
