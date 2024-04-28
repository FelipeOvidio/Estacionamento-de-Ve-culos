
const knex = require('../database/config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const addUser = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existEmail = await knex('usuarios').where({ email }).first()
        if (existEmail) {
            return res.status(409).json({ msg: 'Email ja cadastrado' })
        }
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

const loginUser = async (req, res) => {
    const { email } = req.body
    try {
        const user = await knex('usuarios').where({ email }).first()
        const token = jwt.sign({ id: user.id }, process.env.SENHA, { expiresIn: '8h' })
        const { password: _, ...userLogged } = user

        return res.status(200).json({ userData: userLogged, token })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}


const listUsers = async (req, res) => {
    try {
        const users = await knex.select('id', 'name', 'email').from('usuarios').orderBy('id')
        if (users.length === 0) {
            return res.status(400).json({ msg: "Não há usuario cadastrado" })
        }
        return res.status(200).json(users)


    } catch (error) {
        return res.status(500).json({ msg: error.message })

    }
}

const updateUser = async (req, res) => {
    const { name, email } = req.body
    const { id } = req.params

    try {
        const existEmail = await knex('usuarios').where({ email }).first()
        if (existEmail) {
            return res.status(409).json({ msg: 'Já existe um usuario com email informado' })
        }
        const user = await knex('usuarios').update({ name, email }).where({ id })
        if (user) {
            return res.status(200).json({ msg: 'Dados atulizado com sucesso' })
        }
        return res.status(409).json({ msg: 'Não existe usuario com o Id informado' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

const deleteuser = async (req, res) => {
    const { id } = req.params
    try {
        const existUser = await knex('usuarios').where({ id }).first()
        if (existUser) {
            await knex('usuarios').del().where({ id })
            return res.status(200).json({ msg: 'Usuario exlcuido com sucesso' })
        }
        return res.status(404).json({ msg: 'Não existe usuario com o Id informado' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    addUser,
    listUsers,
    loginUser,
    updateUser,
    deleteuser
}