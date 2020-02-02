/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
    const s1 = split(name);
    const s2 = split(typed);
    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            if (s2[i].indexOf(s1[i]) !== 0) return false;
        }
        return true;
    }
    return false;
};

function split(s) {
    let i = 0;
    let curr = -1;
    const list = [];
    let char = '';
    while (s[i] !== undefined) {
        if (char !== s[i]) {
            curr++;
            char = s[i];
            list.push(s[i]);
        } else {
            list[curr] += char;
        }
        i++;
    }
    return list;
}
