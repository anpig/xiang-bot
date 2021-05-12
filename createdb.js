var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "anpig",
  password: "anpig"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mutelist", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});