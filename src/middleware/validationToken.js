require('dotenv').config()
const knex = require('../database/config')
const jwt = require('jsonwebtoken')


const validationToken = async (req, res, next) => {
    const { authorization } = req.headers
    try {
        if (!authorization) {
            return res.status(409).json({ msg: 'Usuário não tem permissão para aceesar recurso' })
        }
        const token = authorization.split(' ')[1]
        const tokenUser = jwt.verify(token, process.env.SENHA)


    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
    next()
}
module.exports = validationToken