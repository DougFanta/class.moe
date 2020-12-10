const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    avatar:{
        type:String,
        required:true
    },
    whatsapp:{
        type:String,
        required: true
    },
    bio:{
        type:String,
        required: true
    },
    custo:{
        type:Number,
        required:true
    },
    disciplina:{
        type: mongoose.ObjectId, 
        ref: 'Disciplina', 
        required: true
    },
    nome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Professor', esquema, 'professores')