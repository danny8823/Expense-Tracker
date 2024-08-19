const express = require('express');
const userRouter = express.Router()
const usersController = require('../controllers/usersCtrl');
const isAuthenticated = require('../middlewares/isAuth');

// ! REG
userRouter.post('/api/v1/users/register', usersController.register)
// ! LOGIN
userRouter.post('/api/v1/users/login', usersController.login)
// ! PROFILE
userRouter.get('/api/v1/users/profile', isAuthenticated, usersController.profile)
// ! CHANGE PASSWORD
userRouter.put('/api/v1/users/change-password', isAuthenticated, usersController.changeUserPassword)
// ! UPDATE PROFILE
userRouter.put('/api/v1/users/change-profile', isAuthenticated, usersController.updateUserProfile)

module.exports = userRouter