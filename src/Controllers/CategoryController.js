const { createCategory, getAllCategories } = require('../Services');

const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;

        const category = await createCategory(name);

        return res.status(201).json(category);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

const getAllCategoriesController = async (_req, res) => {
    try {
        const categories = await getAllCategories();

        return res.status(200).json(categories);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error' });
    }
};

module.exports = {
    createCategoryController,
    getAllCategoriesController,
};