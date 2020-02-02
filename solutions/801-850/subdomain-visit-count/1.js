/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function (cpdomains) {
    const map = {};
    cpdomains.forEach(cpdomain => {
        cpdomain = cpdomain.split(' ');
        split(cpdomain[1]).forEach(domain => {
            if (map[domain]) map[domain] += cpdomain[0] * 1;
            else map[domain] = cpdomain[0] * 1;
        });
    });
    return Object.keys(map).map(key => `${map[key]} ${key}`);
};

function split(domain) {
    const res = [];
    domain.split('.').reverse().forEach((subdomain, index) => {
        res.push(index === 0 ? subdomain : `${subdomain}.${res[index - 1]}`);
    });
    return res;
}
