const db = require('../dataBase').getInstance()

module.exports = {
  insertUser: (user) => {
    const UserModel = db.getModel('User')
    return UserModel.create(user)
  },

  insertAnswer: (user) => {
    const AnswerModel = db.getModel('Answer')
    return AnswerModel.create(user)
  },

  findUserById: (userId) => {
    const UserModel = db.getModel('User')
    const AnswerModel = db.getModel('Answer')
    return UserModel.findByPk(userId, { include: AnswerModel })
  },

  // updateUser: (user, userId) => {
  //   const UserModel = db.getModel('User')
  //   const TestModel =
  //   return UserModel.update(user, {
  //     where: {
  //       userId,
  //     },
  //   })
  // },

  findUserWithTest: (where = {}, limit = 1, offset = 0) => {
    const UserModel = db.getModel('User')
    const TestModel = db.getModel('Test')
    return UserModel.findOne({
      where,
      limit,
      offset,
      include: [{ model: TestModel }]
    })
  },

  findTests: () => {
    const TestModel = db.getModel('Test')

    return TestModel.findAll
  },

  getDesc: () => {
    const allDec = db.getModel('Description ')
    return allDec.findOne
  }
}
