/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function (A) {
    const l = 'abcdefghijklmnopqrstuvwxyz';
    const m = A.map(w => {
        const s = {};
        w.split('').forEach(c => s[c] = s[c] ? s[c] + 1 : 1);
        return s;
    });
    return l.split('').reduce((res, c) => res + c.repeat(Math.min.apply(null, m.map(w => ~~w[c]))), '').split('');
};
