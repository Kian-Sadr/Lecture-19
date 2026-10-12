//Collecting elements for easier reading later
var output = document.getElementById("output");

/*This url is a useful one for testing web sockets
It's public and can be used by anyone*/
let url = "wss://echo.websocket.org/";
let websocket = new WebSocket(url);

websocket.onopen = function(){
  displayMessage("connected");
  websocket.send("Hello, World!");
};

function displayMessage(message){
  output.innerHTML += "<p>";
  output.innerHTML += message;
  output.innerHTML += "</p>";
};

websocket.onmessage = function(e){
  displayMessage(e.data);
};

websocket.onclose = function(){
  displayMessage("disconnected");
};

setTimeout(function(){websocket.close();}, 2000);
