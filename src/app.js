const express = require('express');
const LoginMiddleware = require('./Middlewares/validateEmailPassword');
const UserMiddleware = require('./Middlewares/validateCreateUser');
const TokenMiddleware = require('./Middlewares/validateToken');
const CategoryMiddleware = require('./Middlewares/validateCreateCategory');

const loginController = require('./Controllers');
const userController = require('./Controllers');
const categoryController = require('./Controllers');
const postController = require('./Controllers');

const app = express();
app.use(express.json());

app.get('/user', TokenMiddleware.validateToken, userController.getAllUsers);
app.get('/user/:id', TokenMiddleware.validateToken, userController.getUserById);

app.get(
    '/categories',
    TokenMiddleware.validateToken,
    categoryController.getAllCategoriesController,
);

app.get(
    '/post',
    TokenMiddleware.validateToken,
    postController.getAllPostsController,
);
app.get(
    '/post/:id',
    TokenMiddleware.validateToken,
    postController.getPostByIdController,
);

app.post(
    '/login',
    LoginMiddleware.verifyEmailAndPassword,
    loginController.getUser,
);

app.post('/user', UserMiddleware.validateCreateUser, userController.createUser);

app.post(
    '/categories',
    TokenMiddleware.validateToken,
    CategoryMiddleware.validateCreateCategory,
    categoryController.createCategoryController,
);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
    response.send();
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
