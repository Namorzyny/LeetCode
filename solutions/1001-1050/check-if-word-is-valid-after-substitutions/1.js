/**
 * @param {string} S
 * @return {boolean}
 */
const isValid = function (S) {
    if (S === '') return true;
    const list = S.split('abc');
    if (list.length < 2) return false;
    return isValid(list.join(''));
};
