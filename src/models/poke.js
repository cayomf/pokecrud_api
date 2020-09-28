const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokeSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const poke = mongoose.model('Poke', PokeSchema)

module.exports = poke
