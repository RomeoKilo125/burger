let mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.password,
  database: 'burgers_db'
})

connection.connect((err) => {
  if (err) {
    console.log("error connecting to database: " + err.stack)
    return
  }
  console.log("connected to database with connection " + connection.threadId);
})

module.exports = connection
