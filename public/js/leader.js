var socket;
$(document).ready(function() {
  socket = io("/leaderClient");
  socket.on("connect", function(data) {
    console.log("Leader Connected to server..");
  });

  socket.emit("GetTable");

  socket.on("scoreData", function(data) {
    console.log(data);
    var tbody;
    for (var i = 0; i < 5; i++) {
      var j = i+1;
      tbody =
        "<tr><td>" +
        j +
        "</td><td>" +
        data[i].pName +
        "</td><td>" + "00." +
        data[i].scoreTime + " Sec"+
        "</td></tr>";
      $("#datamerg").append(tbody);
    }
  });
});