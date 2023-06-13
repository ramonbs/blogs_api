const { getUser } = require('./LoginController');
const { createUser, getAllUsers, getUserById } = require('./UserController');
const {
    createCategoryController,
    getAllCategoriesController,
} = require('./CategoryController');
const {
    createPost,
    getAllPostsController,
    getPostByIdController,
    updatePost,
    deletePost,
} = require('./PostController');

module.exports = {
    getUser,
    createUser,
    getAllUsers,
    getUserById,
    createCategoryController,
    getAllCategoriesController,
    createPost,
    getAllPostsController,
    getPostByIdController,
    updatePost,
    deletePost,
};
