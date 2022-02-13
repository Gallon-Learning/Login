const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  if (req.session.user_id) {
    const userId = req.session.user_id
    return Login.findById(userId)
      .lean()
      .then( (user) => {
        res.render('home', { firstName: user.firstName })
      })
  } else {
    res.redirect('/')
  }  
})
router.get('/logout', (req, res) => {
  if (req.session.user_id) {
    req.session.destroy(() => {
      console.log('session destroyed')
    })
  }  
  return res.redirect('/')
})

module.exports = router