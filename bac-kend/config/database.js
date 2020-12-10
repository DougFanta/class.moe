const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    })

    mongoose.connection.on('connected', () => console.log('mongoose conectado ao servidor'))
    
    mongoose.connection.on('disconnected', () => console.log('mongoose desconectado do servidor'))
    
    process.on('SIGINT', () => mongoose.connection.close(() =>{ 

        console.log('mongoose desconectado pelo encerramento da aplicação') 
        process.exit(0)
    } )
    )
    
}