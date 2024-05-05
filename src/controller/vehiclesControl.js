const knex = require('../database/config')

const listCars = async (req, res) => {
    try {
        const listCar = await knex.select('*').from('veiculos')
        if (listCar.length == 0) {
            return res.status(404).json({ msg: 'Não há veículos cadastrado' })
        }
        return res.status(200).json(listCar)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const addCar = async (req, res) => {
    const { brand, model, plate, year_vehicle, client_id } = req.body
    try {
        const dataCar = {
            brand,
            model,
            plate,
            year_vehicle,
            client_id
        }
        const existPlate = await knex('veiculos').where({ plate }).first()
        if (existPlate) {
            return res.status(409).json({ msg: 'Placa ja possui cadastro' })
        }
        const newCar = await knex('veiculos').insert(dataCar)
        return res.status(201).json({ msg: 'Veiculo cadastrado com sucesso' })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const exitVehicle = async (req, res) => {
    const { vehicle_id, client_id } = req.body
    const { id } = req.params
    try {
        const existVehicle = await knex('veiculos').where({ id }).first()
        if (existVehicle) {
            const prohibitedVehicle = await knex.select('prohibited').from('veiculos').where({ id })

            const register = {
                vehicle_id,
                client_id,
                prohibited: prohibitedVehicle
            }
            await knex('registro_saida').insert(register)
            return res.status(200).json({ msg: 'Registro realizado com sucesso' })
        }
        return res.status(404).json({ msg: 'Não há veiculo com o ID informado' })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const registerVehicles = async (req, res) => {
    try {
        const vehicles = await knex.select('*').from('registro_saida')
        if (vehicles.length == 0) {
            return res.status(404).json({ msg: 'Não há veículos cadastrado' })
        }
        return res.status(200).json(vehicles)
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}


module.exports = {
    listCars,
    addCar,
    exitVehicle,
    registerVehicles
}