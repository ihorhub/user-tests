const { Router } = require('express')
const { userController } = require('../controllers')
const { authMiddlewares, userMiddlewares } = require('../middlewares')

const userRouter = Router()

userRouter.post(
  '/',
  userMiddlewares.userValidMiddleware,
  userMiddleware.checkIsRegisterEmail,
  userController.createUser
)

userRouter.use(
  '/:userId',
  userValidatorMiddleware.joiUserIdValid,
  userMiddleware.checkIsUserRegisterId
)

userRouter.put(
  '/:userId',
  userValidatorMiddleware.joiUserUpdateValid,
  checkAccessToken.accessToken,
  userController.updateUsers
)
userRouter.get('/:userId', userController.getUserById)

module.exports = userRouter
