const jwt = require('jsonwebtoken')

const { ACCESS_TOKEN_SECRET } = require('../../configs/config')
const { ErrorHandler, errors } = require('../../error')
const { oAuthService } = require('../../services')

module.exports = async (req, res, next) => {
  try {
    const access_token = req.get('Authorization')

    if (!access_token) {
      throw new ErrorHandler(
        errors.NOT_VALID_TOKEN.message,
        errors.NOT_VALID_TOKEN.code
      )
    }

    jwt.verify(access_token, ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
        throw new ErrorHandler(
          errors.NOT_VALID_TOKEN.message,
          errors.NOT_VALID_TOKEN.code
        )
      }
    })

    const userWithToken = await oAuthService.getTokenWithUserByParams({
      access_token,
    })

    if (!userWithToken) {
      throw new ErrorHandler(
        errors.NOT_VALID_TOKEN.message,
        errors.NOT_VALID_TOKEN.code
      )
    }
   

    req.user = userWithToken

    next()
  } catch (e) {
    next(e)
  }
}
