const joi = require('joi')
const schemaUser = joi.object({
    name: joi.string().min(3).required().messages({
        'string.min': 'O nome deve conter no minino 3 caracteres',
        'any.required': 'O campo nome é obrigatório',
        'string.base': 'O nome não deve conter numero'
    }),
    email: joi.string().min(5).email().required().messages({
        'string.email': 'O email não é válido'
    }),
    password: joi.string().min(8).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.min': 'A senha deve conter no mimino 5 caracteres'
    }).pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$')).message(
        'A senha deve conter pelo menos um número, um símbolo, uma letra maiúscula'
        + 'e uma letra minúscula, e ter no mínimo 8 caracteres.'),
})

module.exports = schemaUser