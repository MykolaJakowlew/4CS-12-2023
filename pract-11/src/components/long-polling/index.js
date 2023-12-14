import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ScrollToBottomComponent } from "../scrollToBottom";

const request = axios.create({
  baseURL: 'https://7f55-194-44-221-10.ngrok-free.app'
});

const LongPollingChat = () => {
  const navigate = useNavigate();
  const [isConnectedToServer, setIsConnectedToServer] = useState(true);
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const localUserName = localStorage.getItem('userName');
    if (!localUserName) {
      return navigate('/');
    }
    setUserName(localUserName);
    subscribe();
  }, []);



  const subscribe = async () => {
    try {
      const response = await request.get('/messages');
      const { message } = response.data;
      setMessages(prev => [...prev, message]);
      subscribe();
    } catch (err) {
      setIsConnectedToServer(false);
      // Fib: 1,1,2,3,5,8,13,21,...
      // After 1s => request
      // After 1s => request
      // After 2s => request
      // After 3s => request
      // After 5s => request
      // After 8s => request
      // After 13s => request
      // ...
      // setTimeout(() => subscribe(), 1000);
    }
  };

  const sendMessage = async () => {
    if (!value) {
      return;
    }

    await request.post('/messages', {
      userName,
      text: value,
      date: new Date()
    });

    setValue("");
  };

  return (
    <div className="container">
      {!isConnectedToServer ? <div className="server-offline">Connection to server failed</div> : null}
      <div className="form">
        {userName}:
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)} />
        <button onClick={sendMessage} disabled={!isConnectedToServer}>Send message</button>
      </div>
      <div className="messages">
        <ScrollToBottomComponent>
          {messages.map(message => <div>
            <div>
              <b>{message.userName}</b><br />
              <b style={{ fontSize: '10px' }}>{new Date(message.date).toISOString()}</b>
            </div>
            <div>{message.text}</div>
          </div>)}
        </ScrollToBottomComponent>
      </div>
    </div>
  );
};

export default LongPollingChat;
