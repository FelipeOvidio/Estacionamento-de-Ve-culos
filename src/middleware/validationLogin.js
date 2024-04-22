const knex = require('../database/config')
const bcrypt = require('bcrypt')



const validationLogin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await knex('usuarios').where({ email }).first()
        if (user === undefined) {
            return res.status(401).json({ message: 'Email ou senha inválidos' })
        }
        const senhaValida = await bcrypt.compare(password, user.password)
        if (!senhaValida) {
            return res.status(400).json({ msg: 'Email ou senha inválidos' })
        }

        next()
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

module.exports = validationLogin

