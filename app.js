// Require WS module
var webSocketServer = require('ws').Server;

// Create web socket server
var wss = new webSocketServer({port: 5000});
// Another example: const ws = new WebSocket('ws://www.host.com/path');

// On establishing connection
wss.on('connection', function(ws){
    try {
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
    }
    catch(e) {
        console.log('Error! ' + e);
    }
    ws.send("Welcome to web socket");
});

wss.on('close', function(ws){
    ws.send("Connection closed");
});

