module.exports = (client, DataTypes) => {
  const Test = client.define(
    'Test',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      test1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      test2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      test3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      test4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      test5: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    },
    {
      tableName: 'test',
      timestamps: false,
    }
  )

  return Test
}
