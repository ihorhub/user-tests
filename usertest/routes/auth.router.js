const { Router } = require('express')
const { authMiddlewares, userMiddlewares } = require('../middlewares')
const { authController, userController } = require('../controllers')

const authRouter = Router()

authRouter.post(
  '/registration',
  userMiddlewares.userValidMiddleware.joiUserValid,
  userMiddlewares.userCheckMiddleware.checkIsRegisterEmail,
  authController.createUser
)
authRouter.post('/login', authMiddlewares.isPasswordOk, authController.login)

authRouter.get(
  '/logout',
  authMiddlewares.checkAccessToken,
  authController.logout
)

module.exports = authRouter
