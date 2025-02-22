const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const Bd = require('./BaseDatos/ConexionBaseDatos');
const EmpresaRuta = require('./Rutas/EmpresaRuta');
// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Rutas
app.use('/api', EmpresaRuta); // Ahora las rutas empiezan con /api
module.exports = app;
