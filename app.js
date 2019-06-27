
var fs = require("fs");

var file = "users.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


var nameP1;
var company;
var email1;
var score;
db.serialize(function() {
  if (!exists) {
    db.run(
      "CREATE TABLE IF NOT EXISTS Player (pName TEXT,emailP TEXT,company TEXT,scoreTime INTEGER DEFAULT 0,t TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    );
  }
});