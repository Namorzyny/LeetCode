/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
    return check(S) === check(T);
};

function check(s) {
    const st = [];
    s.split('').forEach(char => {
        if (char === '#') st.pop();
        else st.push(char);
    });
    return st.join('');
}
