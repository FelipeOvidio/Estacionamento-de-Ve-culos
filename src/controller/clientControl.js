const knex = require('../database/config')

const customers = async (req, res) => {
    try {
        const listCostumers = await knex.select('*').from('clientes')
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


module.exports = {
    customers,
    addClient
}