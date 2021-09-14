const { Router } = require('express')
const { userController } = require('../controllers')
const { authMiddlewares, userMiddlewares } = require('../middlewares')
const userService = require('../services/user.service')

const userRouter = Router()

userRouter.get('/description ', userController.getDescription)
userRouter.get('/tests', userController.getUsersWithTest)
userRouter.post(
  '/answer',
  authMiddlewares.checkAccessToken,
  userService.insertAnswer
)

userRouter.get('/answer', userService.findUserById)
userRouter.get('/list', userService.findTests)

module.exports = userRouter
