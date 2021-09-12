const db = require('../dataBase').getInstance()

module.exports = {
  insertUser: (user) => {
    const UserModel = db.getModel('User')
    return UserModel.create(user)
  },

  findUserById: (userId) => {
    const UserModel = db.getModel('User')
    const TestModel = db.getModel('Test')
    return UserModel.findByPk(userId, { include: TestModel })
  },

  // updateUser: (user, userId) => {
  //   const UserModel = db.getModel('User')
  //   return UserModel.update(user, {
  //     where: {
  //       userId,
  //     },
  //   })
  // },

  findUsersWithTest: (where = {}, limit = 10, offset = 0) => {
    const UserModel = db.getModel('User')
    const TestModel = db.getModel('Test')
    return UserModel.findAll({
      where,
      limit,
      offset,
      include: [{ model: TestModel }],
    })
  },

  // deleteUser: (userId) => {
  //   const UserModel = db.getModel('User')
  //   return UserModel.destroy({
  //     where: {
  //       userId,
  //     },
  //   })
  // },
  findUserByParams: (findObj) => {
    const UserModel = db.getModel('User')

    return UserModel.findOne({
      where: findObj,
    })
  },
}
