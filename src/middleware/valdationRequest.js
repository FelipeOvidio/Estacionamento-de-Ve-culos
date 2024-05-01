const valdationRequest = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body)
        next()

    } catch (error) {

        return res.status(500).json({ msg: error.message })
    }


}

module.exports = valdationRequest