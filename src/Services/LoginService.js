const { User } = require('../models');

const getUser = async (email, password) => {
    const result = await User.findOne({ where: { email, password } });

    if (!result) return ({ message: 'Invalid fields' });

    return true;
};

module.exports = { getUser };