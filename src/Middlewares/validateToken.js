const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization; 
    console.log('token: ', token);
    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
        const { JWT_SECRET } = process.env;

        const decoded = await promisify(jwt.verify)(token, JWT_SECRET);

        const { username, admin } = decoded;

        req.user = { username, admin };

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateToken };
