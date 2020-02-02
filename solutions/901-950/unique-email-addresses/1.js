/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
    return (new Set(emails.map(email => actualEmail(email)))).size;
};

function actualEmail(email) {
    localName = email.split('@')[0].split('+')[0].split('.').join('');
    domainName = email.split('@')[1];
    return `${localName}@${domainName}`;
}
