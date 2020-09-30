const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    usuario: { 
        type: mongoose.ObjectId, 
        ref: 'Usuarios', 
        required: true
    },
})

module.exports = mongoose.model('Aluno', esquema, 'alunos')