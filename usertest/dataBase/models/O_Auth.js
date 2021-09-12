module.exports = (client, DataTypes) => {
  const O_Auth = client.define(
    'O-Auth',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      access_token: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        reference: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: DataTypes.DATETIME,
        default: client.fn('NOW'),
      },
    },
    {
      tableName: 'o_auth',
      timestamps: false,
    }
  )

  return O_Auth
}
