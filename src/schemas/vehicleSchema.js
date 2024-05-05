const joi = require('joi')


const vehicleSchema = joi.object({
    brand: joi.string().required().messages({
        'any.required': 'Informe a marca do veículo'
    }),
    model: joi.string().required().messages({
        'any.required': 'Infome o modelo do veículo'
    }),
    plate: joi.string().required().messages({
        'any.required': 'Informe a placa do veiculo'
    }),
    year_vehicle: joi.number().required().messages({
        'any.required': 'Informe o ano do veiculo'
    }),
    client_id: joi.number().required().messages({
        'any.required': 'Informe o ID do proprietário do veículo'
    })
})

const registerExit = joi.object({
    vehicle_id: joi.number().required().messages({
        'any.required': 'Informe o ID do veiculo'
    }),
    client_id: joi.number().required().messages({
        'any.required': 'Informe o ID do proprietário do veiculo'
    })
})

module.exports = vehicleSchema
module.exports = registerExit