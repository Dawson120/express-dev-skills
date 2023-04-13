// import modules

import "dotenv/config.js"
import express from 'express'
import { skills } from './data/skills.js'
import logger from 'morgan'
import './config/database.js'
	
// connect to the database with Mongoose
// create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes


app.get('/', function(req, res) {
    res.redirect('/home')
  })

app.get('/home', function(req, res) {
    res.render('home')
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