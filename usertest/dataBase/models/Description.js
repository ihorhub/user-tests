module.exports = (client, DataTypes) => {
  const Description = client.define(
    'Description',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      dec1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dec2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dec3: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'description',
      timestamps: false
    }
  )

  return Description
}
