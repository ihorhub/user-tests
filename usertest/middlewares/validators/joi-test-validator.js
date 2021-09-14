const Joi = require('joi')

module.exports = Joi.object({
  ans: Joi.number().positive().required(),
  ans_2: Joi.string().alphanum().required()
})
