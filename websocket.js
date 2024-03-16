const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 }); 

// Event listener for WebSocket connections
wss.on('connection', function connection(ws) {
    console.log('A new client connected');

    // Event listener for messages from clients
    ws.on('message', function incoming(message) {
        console.log('Received message from client:', message);

        // Broadcast the message to all connected clients (including the sender)
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Event listener for WebSocket disconnections
    ws.on('close', function close() {
        console.log('A client disconnected');
    });
});
