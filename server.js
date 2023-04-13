// import modules

import "dotenv/config.js"
import express from 'express'
import logger from 'morgan'
import './config/database.js'


// connect to the database with Mongoose

import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter } from './routes/skills.js'

// create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// add middleware below the above line of code

app.use(function(req, res, next) {
  console.log('Hello SEI!')
  next()
})

app.use('/', indexRouter)

app.use('/skills', skillsRouter)
app.use(express.urlencoded({ extended: false }))

// mount routes


app.get('/', function(req, res) {
    res.redirect('/index')
  })

app.get('/skills', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})



// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})