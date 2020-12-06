const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { 
        type: String,
        required: true
    },
    aulas: {
        type: mongoose.ObjectId,
        ref: 'Aulas'
    },
    email: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Aluno', esquema, 'alunos')