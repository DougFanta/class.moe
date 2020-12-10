const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    professor:{
        type: mongoose.ObjectId,
        ref: 'Professor',
        required: true
    },
    dia_da_semana:{
        type:String,
        required:true
    },
    horario_disponivel_inicio:{
        type:String,
        required: true
    },
    horario_disponivel_fim:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Horario_aula', esquema, 'horario_aulas')