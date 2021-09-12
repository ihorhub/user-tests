const { Router } = require('express')
const { authMiddlewares, userMiddlewares } = require('../middlewares')
const { authController, userController } = require('../controllers')

const authRouter = Router()

authRouter.post(
  '/',
  authMiddlewares.isPasswordOk,
  authController.login
)

authRouter.get(
  '/logout',
  authMiddlewares.checkAccessToken,
  authController.logout
)

module.exports = authRouter
