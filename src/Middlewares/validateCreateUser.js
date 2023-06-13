const Joi = require('joi');
const loginService = require('../Services');

const validateCreateUser = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    const emailExists = await loginService.getUserByEmail(email, password);

    if (emailExists) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const schema = Joi.object({
        displayName: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        image: Joi.string(),
    });

    const { error } = schema.validate({ displayName, email, password, image });

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = {
    validateCreateUser,
};
