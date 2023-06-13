const Joi = require('joi');

const verifyEmailAndPassword = (req, res, next) => {
    const { body } = req;

    const { error } = Joi.object({
        email: Joi.string().email().required().messages({
            'string.required': 'Some required fields are missing',
            'string.empty': 'Some required fields are missing',
            'any.required': 'Invalid fields',
        }),
        password: Joi.string().required().messages({
            'string.empty': 'Some required fields are missing',
            'any.required': 'Invalid fields',
        }),
    }).validate(body);

    if (error) return res.status(400).send({ message: error.message });

    return next();
};

module.exports = {
    verifyEmailAndPassword,
};
