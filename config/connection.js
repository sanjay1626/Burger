var dotenv = require('dotenv').config();
var mysql = require('mysql');
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Stormerdomain012$",
        database: "burgers_db"
    });

  //console log if connection made
  
  connection.connect(function(err){
      if (err) {
          console.log("error connecting to SQL server:" + err.stack);
          return;
      }
      console.log("Sucessfully connected as id:" + connection.threadId + "\n");

  });

  //module export
  module.exports = connection;