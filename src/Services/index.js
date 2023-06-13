const { getUser } = require('./LoginService');
const { createUser, getUserByEmail, getAllUsers, getUserById } = require('./UserService');
const { createCategory, getAllCategories } = require('./CategoryService');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('./PostService');

module.exports = {
    getUser,
    createUser,
    getUserByEmail,
    getAllUsers,
    getUserById,
    createCategory,
    getAllCategories,
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};