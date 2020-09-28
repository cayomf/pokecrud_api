const Poke = require('../models/poke')
exports.create = async(data) => { 
    console.log(data)
    let poke = new Poke(data)
    await poke.save()
}
exports.getAll = async() => {
    const res = await Poke.find()
    return res
}
exports.delete = async(_id) => {
    await Poke.findByIdAndRemove(_id)
}
exports.update = async(_id, { imageUrl, name, type, description }) => {
    await Poke.findByIdAndUpdate(_id, {
        $set: {
            imageUrl,
            name,
            type,
            description,        
        }
    })
}
exports.getById = async(_id) => {
    const res = await Poke.findById({
        _id
    })

    return res
}


