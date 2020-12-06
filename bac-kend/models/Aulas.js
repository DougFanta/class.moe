const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    disciplina:{
        type: mongoose.ObjectId, 
        ref: 'Disciplina', 
        required: true
    },
    professor: { 
        type: mongoose.ObjectId, 
        ref: 'Professor', 
        required: true
    },
    aluno: {
        type: mongoose.ObjectId,
        ref: 'Aluno',
        required: true
    }
})

module.exports = mongoose.model('Aulas', esquema, 'aulas')