const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    materia:{
        type: Number,
        required: true
    },
    custo:{
        type:Number,
        required:true
    },
    professor:{
        type:String,
        required: true
    },
    professor: { 
        type: mongoose.ObjectId, 
        ref: 'Professor', 
        required: true
    },
})

module.exports = mongoose.model('Aula', esquema, 'aulas')