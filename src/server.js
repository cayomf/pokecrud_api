require("dotenv").config()

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const PokeRoute = require('./routes/pokeRoute')

const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
mongoose.connect(process.env.MONGO_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log(`Connection error: ${err}`);
})

app.use('/pokes', PokeRoute)

const port = 3333
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
