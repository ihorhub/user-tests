const {
  ErrorHandler,
  errors: { NOT_VALID_BODY, NO_CONTENTS }
} = require('../../error')

const { joiTestValidator } = require('../validators')

module.exports = {
  joiTestValid: (req, res, next) => {
    try {
      const { error } = joiTestValidator.validate(req.body)

      if (error) {
        throw new ErrorHandler(NOT_VALID_BODY.message, NO_CONTENTS.code)
      }

      next()
    } catch (e) {
      next(e)
    }
  }
}
