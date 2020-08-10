var mysql = require('mysql');

var con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: 'usbw',
    connectionLimit: 10,
    multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado!");
  con.query("CREATE DATABASE p80login", function (err, result) {
    if (err) throw err;
    console.log("Database criado!");
  });
});
module.exports=con