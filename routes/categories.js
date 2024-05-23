const categoriesRouter = require('express').Router();
const {findAllCategories, createCategory, updateCategory, checkEmptyName, deleteCategory} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, createCategory, checkAuth, sendCategoryCreated)
categoriesRouter.put('/categories/:id', checkEmptyName, updateCategory, checkAuth, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", deleteCategory, checkAuth, sendCategoryDeleted);

module.exports = categoriesRouter;