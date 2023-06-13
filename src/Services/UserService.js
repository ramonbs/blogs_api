const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    await User.create({ displayName, email, password, image });
    
    return true;
};

const getUserByEmail = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });

    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll();

    const usersWithoutPassword = users.map((user) => {
        const { password, ...userWithoutPassword } = user.dataValues;
        return userWithoutPassword;
    });

    return usersWithoutPassword;
};

const getUserById = async (id) => {
    const user = await User.findOne({
        where: { id },
    });

    if (!user) return { message: 'User does not exist' };

    const { password, ...userWithoutPassword } = user.dataValues;

    return userWithoutPassword;
};

module.exports = {
    createUser,
    getUserByEmail,
    getAllUsers,
    getUserById,
};