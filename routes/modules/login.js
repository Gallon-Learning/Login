const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('login')
})
router.post('/', (req, res) => {
  const { email, password } = req.body
  return Login.findOne({ email: email, password: password})
        .lean()
        .then( (user) => res.render('home', { firstName: user.firstName }))
        .catch(error => {
          console.log(error)
          res.redirect('/')
        })
})

module.exports = router