var express = require("express");
var fs = require("fs");
var lastInsertedID;
var file = "users.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var io = require("socket.io");
var app = express();
const PORT = 3000;
db.serialize(function() {
  if (!exists) {
    db.run(
      "CREATE TABLE IF NOT EXISTS Player (pName TEXT,emailP TEXT,company TEXT,scoreTime INTEGER,status TEXT,t TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    );
  }
});
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/save", function(req, res) {
  console.log("data recieved from client:", req.body.name);
});

//socket connection

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

var socket = io.listen(server);

var serverClientS = socket.of("/serverClient");
serverClientS.on("connection", function(client) {
  console.log("ready to register client");
  client.on("disconnect", function() {
    console.log("register client id = " + client.id);
  });
  client.on("register", function(data) {
    console.log("data from client:" + data);

    for (var property in data) {
      if (data.hasOwnProperty(property)) {
        db.run(
          "INSERT INTO Player (pName, emailP, company) VALUES ('" +
            data[property]["name"] +
            "','" +
            data[property]["emailp1"] +
            "','" +
            data[property]["company"] +
            "')"
        );

        db.get("SELECT last_insert_rowid() as id", function(err, row) {
          console.log("Last inserted id is: " + row["id"]);
          lastInsertedID = row["id"];
          console.log("lastInsertedID", lastInsertedID);
        });
      }
    }
  });

});

var gameClientS = socket.of("/gameClient");
gameClientS.on("connection", function(client) {
  console.log("ready to Game client");


  client.on('Time',function(data){

    console.log('total time',data);
     var status='';
    //  Winner Status 30 seconds
    if(data === 30)
    {
      status='looser';
    }
    else{
      status='winner'
      }
db.run("update Player set scoreTime = ?, status = ? where rowid = ?",data,status,lastInsertedID,function(err){

  if (err) {
    console.log("error while updating p2 details on db ", err);
  } else {
    console.log("updated details");
  }

})

  })

});


var leaderClientS = socket.of("/leaderClient");
leaderClientS.on("connection", function(client) {
  console.log("ready to Leader client");
  client.on('GetTable', function(){
    var sat = 'winner';
    db.all("select * from Player WHERE status=? ORDER BY scoreTime ASC", sat, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      leaderClientS.emit('scoreData', result);
    } );
  });
});