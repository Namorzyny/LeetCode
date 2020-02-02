/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    if (n === 1) return ['()'];
    let list = ['((', '()('];
    let count = [0, 1];
    const template = '))))))))))(';
    let pairs = 2;
    while (pairs < n) {
        const list2 = [];
        const count2 = [];
        list.forEach((string, index) => {
            for (let i = 0; i <= pairs - count[index]; i++) {
                list2.push(string + template.substr(-1 - i));
                count2.push(count[index] + i);
            }
        });
        list = list2;
        count = count2;
        pairs++;
    }
    list.forEach((string, index) => {
        list[index] = string + template.substr(0, n * 2 - string.length);
    });
    return list;
};
