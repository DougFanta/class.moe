const Disciplina = require('../models/Disciplina')

const controller = {}

controller.novo = async (req, res) =>{
    try{
        await Disciplina.create(req.body)
        res.status(201).end()
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.listar = async(req, res) =>{
    try {
        let dados = await Disciplina.find()
        res.send(dados)
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.buscarUm = async(req, res) =>{
    try {
        const id = req.params.id
        let resultadoBusca = await Disciplina.findById(id)
        if(resultadoBusca){
            res.send(resultadoBusca)
        }else{
            res.status(404).end()
        }

    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.atualizar = async(req, res) => {
    try {
        const id = req.body._id
        let edicao = await Disciplina.findByIdAndUpdate(id, req.body)
        if(edicao){
            res.status(204).end()
        }
        res.status(404).end()
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.excluir = async(req,res) => {
    try {
        const id = req.body._id
        let excluir = await Disciplina.findByIdAndRemove(id)
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