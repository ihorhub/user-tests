const { userService } = require('../services')
const { ErrorHandler, errors } = require('../error')

module.exports = {
  updateUsers: async (req, res, next) => {
    try {
      const { userId } = req.params
      const user = req.body
      await userService.updateUser(user, userId)

      res.json(ErrorHandler(errors.UPDATE))
    } catch (e) {
      next(e)
    }
  },
  insertAnswer: async (req, res, next) => {
    try {
      const user = req.body
      await userService.insertAnswer(user)
      res.json(errors.CREATE_BODY)
    } catch (e) {
      next(e)
    }
  },

  getDescription: async (req, res, next) => {
    try {
      const desc = await userService.getDesc()
      res.json(desc)
    } catch (e) {
      next(e)
    }
  },
  getAllTestList: async (req, res, next) => {
    try {
      const list = await userService.findTests()
      res.json(list)
    } catch (e) {
      next(e)
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const { userId } = req.params

      const user = await userService.findUserById(userId)
      res.json(user)
    } catch (e) {
      next(e)
    }
  },

  getUsersWithTest: async (req, res, next) => {
    try {
      const { limit = 1, page = 1, ...where } = req.query
      const offset = limit * (page - 1)

      const UserWithTests = await userService.findUserWithTest(
        where,
        +limit,
        +offset
      )

      res.json(UserWithTests)
    } catch (e) {
      next(e)
    }
  }
}
