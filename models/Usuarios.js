const mongoose = require("mongoose")

const esquema = mongoose.Schema({
    login:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: Number,
        min: 0,
        max: 1,
        required: true
    }
})

module.exports = mongoose.model('Usuarios', esquema, 'usuarios')