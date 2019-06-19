'use strict'
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const { getSquare, getSquareRoot, sumaVector, genMatrix, gatParVector } = require('./utils');
const app = express();
const port = 3000;

// Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Enabling JSON bodyParser
app.use(bodyParser());

// Archivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// REDIRECCIONES
app.get('/', (req, res) => {
  res.render('menu.pug');
});

app.get('/inicio', (req, res) => {
  res.render('menu.pug');
});

app.get('/inicio/lab1', (req, res) => {
  res.render('lab1.pug');
});

app.get('/inicio/lab2', (req, res) => {
  res.render('lab2.pug');
});

app.get('/inicio/lab3', (req, res) => {
  res.render('lab3.pug');
});
//REDIRECCIONES


//PETICIONES
app.post('/', (req, res) => {
  const { number } = req.body;
  res.json({message: `El cuadrado del número es ${getSquare(number)} y la raíz cuadrada es: ${getSquareRoot(number)}`});
});

app.post('/inicio/lab1', (req, res) => {
  const { vector } = req.body;
  res.json({message: `${sumaVector(vector)}`});
});

app.post('/inicio/lab2', (req, res) => {
  const { mnumber } = req.body;
  res.json({message: `${genMatrix(mnumber)}`});
});

app.post('/inicio/lab3', (req, res) => {
  const { parVector } = req.body;
  res.json({message: `${gatParVector(parVector)}`});
});
//PETICIONES

app.listen(port, () => {
  console.log(`La aplicación esta ejecutando en el puerto:  ${port}!`);
});