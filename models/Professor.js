const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
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
    usuário:{
        type: mongoose.ObjectId, 
        ref: 'Usuarios', 
        required: true
    }
})

module.exports = mongoose.model('Professor', esquema, 'professores')