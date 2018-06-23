let orm = require('../config/orm.js')

let burger = {
  all: function(cb) {
    orm.all('burgers', (res) => {
      cb(res)
    })
  },

  create: function(keys, values, cb) {

    orm.create('burgers', keys, values, (res) => {
      cb(res)
    })
  }



}

module.exports = burger
