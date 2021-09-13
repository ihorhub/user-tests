const { oAuthService } = require('../services')
const { AUTHORIZATION } = require('../constans/constans')
const { hash } = require('../helper/password.helper')
const { userService } = require('../services')
const {
  errors: { NO_CONTENTS, CREATE_BODY },
} = require('../error')
const tokinizer = require('../helper/tokinizer')

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const password = await hash(req.body.password)

      Object.assign(req.body, { password })

      await userService.insertUser(req.body)

      res.status(CREATE_BODY).json(CREATE_BODY)
    } catch (e) {
      next(e)
    }
  },

  login: async (req, res, next) => {
    try {
      const { id } = req.user
      const token = tokinizer()

      await oAuthService.createToken({ user_id: id, ...token })

      res.json(token)
    } catch (e) {
      next(e)
    }
  },
  logout: async (req, res, next) => {
    try {
      const accessToken = req.header(AUTHORIZATION)

      await oAuthService.deleteToken(accessToken)

      res.send(NO_CONTENTS)
    } catch (e) {
      next(e)
    }
  },
}
