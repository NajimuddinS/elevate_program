const express = require('express')
const app = express()

const router = express.Router()

const userCred= {
    username:"user01",
    password:"pass@123"
}

const productList = {
    name:"product01",
    description:"desc",
    price:"1000"
}

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  res.render('regular')
})

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

app.use('/', router)
