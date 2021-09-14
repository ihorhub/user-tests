module.exports = (client, DataTypes) => {
  const User_2_answer = client.define(
    'User_2_Answer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      answer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      tableName: 'users_2_answer',
      timestamps: false
    }
  )

  return User_2_Answer
}
