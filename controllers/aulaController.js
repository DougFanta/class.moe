const Professor = require('../models/Aulas')

const controller = {}

controller.novo = async (req, res) =>{
    try{
        await Professor.create(req.body)
        res.status(201).end()
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.listar = async(req, res) =>{
    try {
        let dados = await Professor.find()
        res.send(dados)
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.buscarUm = async(req, res) =>{
    try {
        const id = req.params.id
        let resultadoBusca = await Professor.findById(id)
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
        const id = req.body.id
        let edicao = await Professor.findByIdAndUpdate(id, req.body)
        if(edicao){
            res.status(204).end()
        }
        res.status(404).end()
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.excluir = async(req,body) => {
    try {
        const id = req.body.id
        let excluir = await Professor.findByIdAndRemove(id)
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