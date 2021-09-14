module.exports = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'SECRET_ACCESS',

  DB_USERNAME: process.env.SEQUELIZE_USERNAME || 'root',
  DB_PASSWORD: process.env.SEQUELIZE_PASSWORD || 'parol',
  PORT: process.env.PORT || '5000'
}
