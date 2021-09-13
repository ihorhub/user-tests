const { userService } = require('../services')

const { hash } = require('../helper/password.helper')

module.exports = {
  updateUsers: async (req, res, next) => {
    try {
      const { userId } = req.params
      const user = req.body
      await userService.updateUser(user, userId)

      res.json({
        message: 'Updated',
      })
    } catch (e) {
      next(e)
    }
  },

  getUserById: async (req, res, next) => {
    try {
      res.json(req.user)
    } catch (e) {
      next(e)
    }
  },

  getUsersWithTest: async (req, res, next) => {
    try {
      const { limit = 10, page = 1, ...where } = req.query
      const offset = limit * (page - 1)

      const UsersWithCars = await userService.findUsersWithTest(
        where,
        +limit,
        +offset
      )

      res.json(UsersWithCars)
    } catch (e) {
      next(e)
    }
  },
}
