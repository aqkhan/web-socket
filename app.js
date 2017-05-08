// Require WS module
var webSocketServer = require('ws').Server;

// Create web socket server
var wss = new webSocketServer({port: 3000});
// Another example: const ws = new WebSocket('ws://www.host.com/path');

// On establishing connection
wss.on('connection', function(ws){
    ws.on('message', function(message){
        if (message === 'exit') {
            ws.close();
        }
        else {
            wss.clients.forEach(function(client){
                client.send(message);
            });
        }
    });
    ws.send("Connection established");
});

wss.on('close', function(ws){
    ws.send("Connection closed");
});