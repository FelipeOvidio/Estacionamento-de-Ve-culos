const knex = require('../database/config')

const addClient = async (req, res) => {
    const { name, cpf, telephone } = req.body
    try {
        const existCpf = await knex('usuarios').where({ cpf }).first()
        if (existCpf) {
            return res.status(409).json({ msg: 'Cpf ja possui cadastro' })
        }
        const newClient = {
            name,
            cpf,
            telephone
        }
        const client = await knex('clientes').insert(newClient)
        return res.status(201).json({ msg: 'Cliente cadastrado com sucesso' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const listCustomers = async (res, req) => {
    try {
        const customers = select('id', 'name', 'cpf', 'telephone').from('clientes').orderBy('id')
        if (customers.length === 0) {
            return res.status(400).json({ msg: "Não há usuario cadastrado" })
        }
        return res.status(200).json(customers)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    addClient,
    listCustomers
}
