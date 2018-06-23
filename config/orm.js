let connection = require('../config/connection.js')

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

let orm = {
  all: function(tableInput, cb) {
    let queryString = 'SELECT * FROM ' + tableInput + ";"
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err
      }
      cb(result)
    })
  },

  create: function(table, fields, vals, cb) {
    let queryString = 'INSERT INTO ' + table
    queryString += ' (' + fields.toString() + ')'
    queryString += ' VALUES (' + printQuestionMarks(vals.length) + ')'
    queryString += ';'
    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err
      }
      cb(result);
    })

  }




}


module.exports = orm
