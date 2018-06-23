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

router.post('/api/burgers', (req, res) => {
  burger.create(['burger_name'], [req.body.name], (result) => {
    res.json({id: result.insertId})
  })
})


module.exports = router
