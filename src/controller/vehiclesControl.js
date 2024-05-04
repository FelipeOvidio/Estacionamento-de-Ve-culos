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



module.exports = {
    listCars,
    addCar
}