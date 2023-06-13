const jwt = require('jsonwebtoken');

const token = (email) => {
    const { JWT_SECRET } = process.env;

    const payload = {
        username: email,
        admin: false,
    };

    const tokenAssign = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d',
    });

    return tokenAssign;
};
module.exports = token;
