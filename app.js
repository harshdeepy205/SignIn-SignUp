const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')



//Database Connection
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb")
})
mongoose.connection.on('error', (err) => {
    console.log('Connection Error', err)
})

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))

// app.get('/', (req, res) => {
//     res.send('hello from get')
// })


app.listen(PORT, () => {
    console.log("Server Started at PORT ", PORT)
})
