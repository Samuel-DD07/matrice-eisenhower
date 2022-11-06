const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 5001
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRoute = require('./routes/User')
const TaskRoute = require('./routes/Task')
const CookieRoute = require('./routes/Cookies')
const thePath = path.resolve(__dirname, "../frontend/build")

mongoose.connect('mongodb+srv://TheBlackLord:lEqEBjgCTCQqhtS4@cluster0.dlqjk.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static(thePath));

app.use('/users', UserRoute)
app.use('/tasks', TaskRoute)
app.use('/cookies', CookieRoute)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(thePath, "index.html"))
});

app.listen(port, console.log(`server lancé au port ${port}`))