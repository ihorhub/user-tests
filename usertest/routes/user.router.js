const { Router } = require('express')
const { userController } = require('../controllers')
const { authMiddlewares, userMiddlewares } = require('../middlewares')

const userRouter = Router()

userRouter.post('/')

userRouter.put('/:userId', userController.updateUsers)

userRouter.get('/:userId', userController.getUserById)

module.exports = userRouter
