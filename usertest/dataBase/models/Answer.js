module.exports = (client, DataTypes) => {
  const Answer = client.define(
    'Answer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      ans: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ans_2: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'answer',
      timestamps: false
    }
  )

  return Answer
}
