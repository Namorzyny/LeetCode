/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    return `/${path.split('/').reduce((total, val) => {
        if (val !== '' && val !== '.') {
            if (val === '..') total.pop();
            else total.push(val);
        }
        return total;
    }, []).join('/')}`;
};
