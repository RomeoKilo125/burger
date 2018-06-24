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
  },

  update: function(objUpdate, condition, cb) {
    // console.log(objUpdate);
    orm.update('burgers', objUpdate, condition, (res) => {
      cb(res)
    })
  },

  delete: function(condition, cb) {
    orm.delete('burgers', condition, (res) => {
      cb(res)
    })
  }

}

module.exports = burger
