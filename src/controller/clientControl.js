const knex = require('../database/config')

const customers = async (req, res) => {
    try {
        const listCostumers = await knex.select('*').from('clientes').orderBy('id')
        if (listCostumers.length == 0) {
            return res.status(404).json({ msg: 'Não clientes cadastrados' })
        }
        return res.status(200).json(listCostumers)

    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}

const addClient = async (req, res) => {
    const { name, cpf, telephone } = req.body
    try {
        const existCpf = await knex('clientes').where({ cpf }).first()
        if (existCpf) {
            return res.status(409).json({ msg: 'Ja existe cadastro com CPF informado' })
        }
        const existTell = await knex('clientes').where({ telephone }).first()
        if (existTell) {
            return res.status(409).json({ msg: 'Telefone informado não pode ser cadastrado' })
        }
        const newClient = {
            name,
            cpf,
            telephone
        }
        const dataClient = await knex('clientes').insert(newClient)

        return res.status(201).json({ msg: 'Cliente cadastrado com sucesso' })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const updateClient = async (req, res) => {
    const { name, cpf, telephone } = req.body
    const { id } = req.params
    try {

        const client = await knex('clientes').update({ name, cpf, telephone }).where({ id })
        if (client) {
            return res.status(200).json({ msg: 'Dados atulizado com sucesso' })
        }

        return res.status(404).json({ msg: 'Não existe usuario com o Id informado' })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}


module.exports = {
    customers,
    addClient,
    updateClient
}