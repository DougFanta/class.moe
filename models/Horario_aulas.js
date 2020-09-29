const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    materia_id:{
        type: mongoose.ObjectId, 
        ref: 'Professor', 
        required: true
    },
    dia_da_semana:{
        type:Number,
        min:0,
        max:6,
        required:true
    },
    horario_inicio:{
        type:Number,
        required: true
    },
    horario_fim:{
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Horario_aula', esquema, 'horario_aulas')