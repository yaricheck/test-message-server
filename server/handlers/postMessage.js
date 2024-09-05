import { addMessage } from "../store.js";

const postMessageHandler = async (req, res) => {
  try {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const message = JSON.parse(Buffer.concat(buffers).toString());
    addMessage(message);
    res.end('{ "status": "success" }');
  }
  catch (e) {
    res.statusCode = 500;
    res.end(`{ "message": ${e.message} }`);
  }
}

export default postMessageHandler;