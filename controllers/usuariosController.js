const Aulas = require('../models/Usuarios')

const controller = {}

controller.novo = async (req, res) =>{
    try{
        await Aulas.create(req.body)
        res.status(201).end()
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.listar = async(req, res) =>{
    try {
        let dados = await Aulas.find()
        res.send(dados)
        console.log(dados)
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.buscarUm = async(req, res) =>{
    try {
        const id = req.params.id
        let resultadoBusca = await Aulas.findById(id)
        console.log(resultadoBusca)
        if(resultadoBusca){
            res.send(resultadoBusca)
        }

        res.status(404).end()

    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.atualizar = async(req, res) => {
    try {
        const id = req.body._id
        let edicao = await Aulas.findByIdAndUpdate(id, req.body)
        console.log(edicao)
        if(edicao){
            res.status(204).end()
        }else{
            res.status(404).end()
        }
        
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.excluir = async(req,res) => {
    try {
        const id = req.body._id
        let excluir = await Aulas.findByIdAndRemove(id)
        console.log(excluir)
        if(excluir){
            res.status(204).end()
        }
        res.status(404).end()
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller