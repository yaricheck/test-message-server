import { WebSocketServer } from 'ws';
let webSocket;
const connectSocket = (server) => {
    const webSocketServer = new WebSocketServer({ server });
    webSocketServer.on('connection', (ws, request, client) => {
        webSocket = ws;
        ws.on('error', console.error);
        
        ws.on('message', (data) => {
            console.log(`Received message ${data} from user ${client}`);
        });
        ws.send('connected');
    });
};

const onAddMessage = (message) => {
    console.log('add');
    webSocket.send('add', message);
};

const onDeleteMessage = (message) => {
    webSocket.send('delete', message);
};

export { connectSocket, onAddMessage, onDeleteMessage };