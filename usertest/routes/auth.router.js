const { Router } = require('express')
const { authMiddlewares, userMiddlewares } = require('../middlewares')
const { authController } = require('../controllers')

const authRouter = Router()

authRouter.post(
  '/registration',
  userMiddlewares.userValidMiddleware.joiUserValid,
  userMiddlewares.userCheckMiddleware.checkIsRegisterEmail,
  authController.createUser
)
authRouter.post('/login', authMiddlewares.isPasswordOk, authController.login)

//** state 3 if checkbox " disagree to start" */
authRouter.post(
  '/logout',
  authMiddlewares.checkAccessToken,
  authController.logout
)

module.exports = authRouter
