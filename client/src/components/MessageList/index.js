import './index.css';
import { useQuery } from 'react-query';

const MessageList = () => {
  const { isLoading, error, data } = useQuery(
    'messages',
    () => fetch('http://localhost:3000').then((response) => response.json()),
  );

  if (error) return 'Oops! Something went wrong';

  return (
    <>
      {isLoading ? 'Loading...' : (
        <>
            {data.map((message) => <div key={message.id}>{message.title}</div>)}
            {!data.length && <div className="no-items">No messages yet...</div>}
        </>
      )}
    </>
  );
}

export default MessageList;
