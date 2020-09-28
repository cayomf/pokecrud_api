const repository = require('../repositories/pokeRepository')

exports.getAll = async(req, res) => {
    try {
        let pokes = await repository.getAll()
        return res.json(pokes)
    } catch (error) {
        return res.status(400).json({
            error: 'Unexpected error while listing poke'
        })
    }
}
exports.create = async(req, res) => {
    const { imageUrl, name, type, description } = req.body

    const poke = {
        imageUrl,
        name,
        type,
        description,
    }

    try {
        await repository.create(poke)
        return res.status(201).send()
    } catch (error) {
        return res.status(400).json({
            error: 'Unexpected error while creating a new poke'
        })
    }
}
exports.put = async(req, res) => {
    const { _id } = req.params
    const { imageUrl, name, type, description } = req.body 

    const poke = {
        imageUrl,
        name,
        type,
        description,
    }

    try {
        await repository.update(_id, poke)
        return res.status(201).json({ message: 'Successfully updated poke!' })
    } catch (error) {
        return res.status(400).json({
            error: 'Unexpected error while editing a new poke'
        })
    }
}
exports.delete = async(req, res) => {
    const { _id } = req.params

    try {
        await repository.delete(_id)
        return res.status(201).json({ message: 'Successfully deleted poke!' })
    } catch (error) {
        return res.status(400).json({
            error: 'Unexpected error while deleting a poke'
        })
    }
}
exports.getById = async(req, res) => {
    const { _id } = req.params

    try {
        let poke = await repository.getById(_id)
        return res.json(poke)
    } catch (error) {
        return res.status(400).json({
            error: 'Unexpected error while getting poke'
        })
    }
}

