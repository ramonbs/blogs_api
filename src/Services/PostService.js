const { BlogPost, User, Category } = require('../models');
const objectConstructor = require('../utils/object.constructor');

const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user' }, { model: Category, as: 'categories' },
        ],
    });

    const postsMapped = objectConstructor(posts);
    
    return postsMapped;
};

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [{ model: User, as: 'user' }, { model: Category, as: 'categories' }],
    });

    if (!post) return null;

    const postMapped = objectConstructor([post])[0];

    return postMapped;
};

module.exports = {
    getAllPosts,
    getPostById,
};
