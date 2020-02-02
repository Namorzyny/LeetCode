/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function (N) {
    let max = 0;
    let previous;
    let i = 0;
    while (N !== 0) {
        if (N % 2) {
            if (previous !== undefined) max = Math.max(max, i - previous);
            previous = i;
        }
        N = ~~(N / 2);
        i++;
    }
    return max;
};
