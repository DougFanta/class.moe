const Aulas = require('../models/Aluno')

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
        let dados = await Aulas.find().populate('usuario', 'login tipo')
        res.send(dados)
    } catch (erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.buscarUm = async(req, res) =>{
    try {
        const id = req.params.id
        let resultadoBusca = await Aulas.findById(id)
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
        let excluir = await Aulas.findByIdAndRemove(id)
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