import { getMessages } from "../store.js";

const getMessagesHandler = async (req, res) => {
  try {
    const messages = getMessages();
    res.end(JSON.stringify(messages));
  }
  catch {
    res.statusCode = 500;
    res.end('{ "message": "something went wrong" }');
  }
};

export default getMessagesHandler;