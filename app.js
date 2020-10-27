const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express();

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection

con.on('open', function(){
    console.log('Connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
//adding middleware to route the aliens request
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server is restarted');
})