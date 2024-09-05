import { useState } from 'react';
import './index.css';
import { useMutation } from 'react-query';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const mutation = useMutation({
    mutationFn: (newMessage) =>
      fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(newMessage)
        }).then((response) => response.json()),
  });

  return (
    <div className="message-form">
      {mutation.isPending ? (
        'Adding new message...'
      ) : (
        <>
          <input value={message} onChange={(e) =>setMessage(e.currentTarget.value)} />
          <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: message })
            }}
            >
            Create message
          </button>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Message added!</div> : null}
        </>
      )}
    </div>
  );
}

export default MessageForm;
