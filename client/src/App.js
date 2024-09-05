import { useEffect } from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import { useQueryClient } from 'react-query';
function App() {
  const queryClient = useQueryClient()
  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:3000/');
    websocket.onopen = () => {
      console.log('connected');
    }
    websocket.onmessage = (event) => {
      console.log('messages');
      queryClient.invalidateQueries('messages');
    }
  }, [queryClient]);

  return (
    <div className="App">
      <header>
        <h1>Message list</h1>
      </header>
      <main>
        <MessageList />
        <MessageForm />
      </main>
    </div>
  );
}

export default App;
