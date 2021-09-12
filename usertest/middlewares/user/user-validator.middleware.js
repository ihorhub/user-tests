const {
  ErrorHandler,
  errors: { NOT_VALID_BODY, WRONG_EMAIL_OR_PASS },
} = require('../../error')

const { joiUserValidator } = require('../validators')

module.exports = {
  joiUserValid: (req, res, next) => {
    try {
      const { error } = joiUserValidator.validate(req.body)

      if (error) {
        throw new ErrorHandler(NOT_VALID_BODY.message, WRONG_EMAIL_OR_PASS.code)
      }

      next()
    } catch (e) {
      next(e)
    }
  },
}
