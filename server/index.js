import { createServer } from "http";
import { WebSocketServer } from 'ws';
import getMessagesHandler from "./handlers/getMessages.js";
import postMessageHandler from "./handlers/postMessage.js";
import { connectSocket } from "./socket.js";

const handlers = {
  'GET': getMessagesHandler,
  'POST': postMessageHandler,
}

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  const handler = handlers[req.method];
  console.log(req.method);
  if (!handler) {
    res.end('missing handler');
    return;
  };
  handler(req, res);
});

connectSocket(server);
server.listen(3000, () => console.log("server runs on port 3000"));