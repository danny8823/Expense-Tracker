const express = require('express');
const categoryRouter = express.Router()
const usersController = require('../controllers/usersCtrl');
const isAuthenticated = require('../middlewares/isAuth');
const categoryController = require('../controllers/categoryCtrl');

// ! ADD
categoryRouter.post(
    '/api/v1/categories/create', 
    categoryController.create,
    isAuthenticated
)
// ! LISTING
categoryRouter.get(
    '/api/v1/categories/lists', 
    categoryController.lists
)
// ! UPDATE
categoryRouter.put(
    '/api/v1/categories/update/:categoryId',
    isAuthenticated,
    categoryController.update
)
// ! DELETE
categoryRouter.delete(
    '/api/v1/categories/delete/:id',
    isAuthenticated,
    categoryController.delete
)
module.exports = categoryRouter