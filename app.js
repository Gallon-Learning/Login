// require packages
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser')

const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

require('./config/mongoose')

// setting
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'login',
  name: 'user', // optional
  saveUninitialized: false,
  resave: true, 
}))

app.use(routes)

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})