var dotenv = require('dotenv').config();
var mysql = require('mysql');
    connection = mysql.createConnection({
        host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "he1fqgg6zp7jk2jz",
        password: "ttw582pcvoa14zb6",
        database: "p0hcejlyusy9rjsa"
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