const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  if (req.session.user_id) {
    return res.redirect('/home')
  }
  res.render('login')
})
router.post('/', (req, res) => {
  const { email, password } = req.body
  return Login.findOne({ email: email, password: password})
        .lean()
        .then( (user) => {
          req.session.user_id = user._id
          res.redirect('/home')
        })
        .catch(error => {
          const errorMessage = 'Email or Password is wrong.'
          res.render('login', { errorMessage })
        })
})

module.exports = router