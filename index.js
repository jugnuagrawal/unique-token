const crypto = require('crypto');

const e = {};
const CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
e.token = () => {
    const x = Math.random();
    const y = Date.now();
    return crypto.createHash('RSA-SHA256').update(y + '$' + x).digest('hex').toUpperCase();
};

e.random = (options = { length: 6, type: 0 }) => {
    let token = '';
    if(!options.length){
        options.length = 6;
    }
    for (let i = 0; i < options.length; i++) {
        const rand = Math.floor(Math.random() * 10000);
        if (options.type === 1) {
            token += CHARS[rand % 26];
        } else if (options.type === 2) {
            token += CHARS[(rand % 10) + 26];
        } else {
            token += CHARS[rand % 36];
        }
    }
    return token;
};

e.NUMERIC = 2;
e.ALPHABET = 1;

module.exports = e;