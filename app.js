// Require WS module
var webSocketServer = require('ws').Server;

// Create web socket server
var wss = new webSocketServer({port: 3000});
// Another example: const ws = new WebSocket('ws://www.host.com/path');

// On establishing connection
wss.on('connection', function(ws){
    ws.send("Connection established");
});