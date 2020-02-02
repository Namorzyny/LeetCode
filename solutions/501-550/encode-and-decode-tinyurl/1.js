const list = [];
const prefix = 'http://tinyurl.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
    list.push(longUrl);
    return prefix + list.length;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
    return list[~~shortUrl.split(prefix)[1] - 1];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
