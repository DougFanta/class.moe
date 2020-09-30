const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const db = require('./config/database')
const professor = require('./routes/professor')
const aula = require('./routes/aula')
const horario = require('./routes/horario')
const usuarios = require('./routes/usuarios')
const alunos = require('./routes/aluno')

db(`mongodb+srv://douglasSoares:11723Dss@cluster0.hk58y.gcp.mongodb.net/class_moe?retryWrites=true&w=majority`)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/professor', professor)
app.use('/aula', aula)
app.use('/horario-aula', horario)
app.use('/usuarios', usuarios)
app.use('/alunos', alunos)

module.exports = app;
