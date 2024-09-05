import { onAddMessage, onDeleteMessage } from "./socket.js";

const store = [];

const getMessages = () => store;
const addMessage = (message) => {
    console.log(message);
    store.push(message);
    onAddMessage(message);
    if (store.length > 9) {
        onDeleteMessage(store.shift());
    };
}

export { getMessages, addMessage };