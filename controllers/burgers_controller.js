let express = require('express')

let router = express.Router()

let burger = require('../models/burger.js')

router.get("/", (req, res) => {
  burger.all((data) => {
    let hbsObject = {
      burgers: data
    }
    console.log(hbsObject);
    res.render('index', hbsObject)
  })
})


module.exports = router
