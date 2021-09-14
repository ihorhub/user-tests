const { userService } = require('../../services')
const db = require('../../dataBase').getInstance()
const {
  ErrorHandler,
  errors: { NOT_VALID_BODY, WRONG_EMAIL_OR_PASS },
} = require('../../error')

module.exports = {
  checkIsRegisterEmail: async (req, res, next) => {
    try {
      const { email } = req.body
      const [user] = await userService.findUserByParams({ email })

      if (user) {
        throw new ErrorHandler(
          WRONG_EMAIL_OR_PASS.message,
          WRONG_EMAIL_OR_PASS.code
        )
      }

      next()
    } catch (e) {
      next(e)
    }
  },

  checkIsUserRegisterId: async (req, res, next) => {
    try {
      const { userId } = req.params
      const user = await userService.findUserById(userId)

      if (!user) {
        throw new ErrorHandler(NOT_VALID_BODY.message, NOT_VALID_BODY.code)
      }
      req.user = user

      next()
    } catch (e) {
      next(e)
    }
  },
}
