let orm = require('../config/orm.js')

let burger = {
  all: function(cb) {
    orm.all('burgers', (res) => {
      cb(res)
    })
  }
}

module.exports = burger
