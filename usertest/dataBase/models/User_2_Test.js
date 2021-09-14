module.exports = (client, DataTypes) => {
  const User_2_Test = client.define(
    'User_2_Test',
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
      test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      }
    },
    {
      tableName: 'users_2_tests',
      timestamps: false
    }
  )

  return User_2_Test
}
