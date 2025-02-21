const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    options: { encrypt: false } // Esto es específico para SQL Server, lo dejas tal cual
  },
  logging: false // Si quieres activar el logging, puedes cambiarlo a 'true'
});

// Prueba la conexión
sequelize.authenticate()
  .then(() => console.log('Conectado a SQL Server'))
  .catch(err => console.error('Error al conectar la base de datos:', err));

module.exports = sequelize;
