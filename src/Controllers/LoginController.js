const loginService = require('../Services');
const token = require('../utils/jwt.token');

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await loginService.getUser(email, password);

        if (result.message) return res.status(400).json({ message: result.message });

        const tokenAssign = token(email);

        return res.status(200).json({ token: tokenAssign });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

module.exports = { getUser };
