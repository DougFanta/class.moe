const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    mongoose.connection.on('connected', () => console.log('mongoose conectado ao servidor'))
    
    mongoose.connection.on('disconnected', () => console.log('mongoose desconectado do servidor'))
    
    mongoose.connection.on('SIGINT', () => mongoose.connection.close(() =>{ 

        console.log('mongoose desconectado pelo encerramento da aplicação') 
        process.exit(0)
    } )
    )
    
}