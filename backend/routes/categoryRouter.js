const express = require('express');
const categoryRouter = express.Router()
const usersController = require('../controllers/usersCtrl');
const isAuthenticated = require('../middlewares/isAuth');
const categoryController = require('../controllers/categoryCtrl');

// ! ADD
categoryRouter.post(
    '/api/v1/categories/create',
    isAuthenticated, 
    categoryController.create
)
// ! LISTING
categoryRouter.get(
    '/api/v1/categories/lists',
    isAuthenticated, 
    categoryController.lists
)
// ! UPDATE
categoryRouter.put(
    '/api/v1/categories/update/:categoryId',
    isAuthenticated,
    categoryController.update
)
//! delete
categoryRouter.delete(
    "/api/v1/categories/delete/:id",
    isAuthenticated,
    categoryController.delete
  );
module.exports = categoryRouter