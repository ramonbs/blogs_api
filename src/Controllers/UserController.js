const UserService = require('../Services');
const token = require('../utils/jwt.token');

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;

        await UserService.createUser(displayName, email, password, image);

        const tokenAssign = token(email);

        return res.status(201).json({ token: tokenAssign });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

const getAllUsers = async (_req, res) => {
    try {
        const users = await UserService.getAllUsers();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);

        if (user.message) return res.status(404).json(user);

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};
