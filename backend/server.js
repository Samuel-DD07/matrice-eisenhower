const express = require('express')
const app = express()
const port = 5001
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRoute = require('./routes/User')

mongoose.connect('mongodb+srv://TheBlackLord:lEqEBjgCTCQqhtS4@cluster0.dlqjk.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', UserRoute)

app.listen(port, console.log(`server lancé au port ${port}`))