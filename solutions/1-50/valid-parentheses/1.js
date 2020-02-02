/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const st = [];
    const map = {'(': ')', '[': ']', '{': '}'};
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '}': case ']': case ')':
                if (map[st.pop()] !== s[i]) return false;
                break;
            default: st.push(s[i]);
        }
    }
    return st.length === 0;
};
