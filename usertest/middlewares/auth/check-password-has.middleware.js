const { compare } = require('../../helper/password.helper')
const {
  ErrorHandler,
  errors: { WRONG_EMAIL_OR_PASS },
} = require('../../error')
const { findUserByParams } = require('../../services/user.service')

module.exports = {
  findUserParam: async (req, res, next) => {
    try {
      const { password, email } = req.body

      const user = await findUserByParams({ email })

      if (!user) {
        throw new ErrorHandler(
          WRONG_EMAIL_OR_PASS.message,
          WRONG_EMAIL_OR_PASS.code
        )
      }
      await compare(password, user.password)

      req.user = user

      next()
    } catch (e) {
      next(e)
    }
  },
}
