const joi = require('joi')

const schemaClient = joi.object({
    name: joi.string().min(3).required().messages({
        'string.min': 'O nome deve conter no minino 3 caracteres',
        'any.required': 'O campo nome é obrigatório',
        'string.base': 'O nome não deve conter numero'
    }),
    cpf: joi.string().min(11).required().messages({
        'string.min': 'O cpf deve conter 11 numeros',
        'any.required': 'O campo cpf é obrigatório'
    }),
    telephone: joi.string().min(11).required().messages({
        'string.min': 'O telefone deve conter 11 digitos',
        'any.required': 'O campo telephone é obrigatório'
    })
})

module.exports = schemaClient