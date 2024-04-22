
const knex = require('../database/config')
const bcrypt = require('bcrypt')
const addUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const passwordCript = await bcrypt.hash(password, 10)
        const newUser = {
            name,
            email,
            password: passwordCript
        }
        await knex('usuarios').insert(newUser)
        const { password: _, ...user } = newUser
        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const listUsers = async (req, res) => {
    try {
        const users = await knex('usuarios')
        if (users.length === 0) {
            return res.status(400).json({ msg: "Não há cliente cadastrado" })
        }
        return res.status(200).json(users)


    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}

module.exports = {
    addUser,
    listUsers
}