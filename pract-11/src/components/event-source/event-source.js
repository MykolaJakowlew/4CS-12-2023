import { useEffect, useState } from "react";
import axios from 'axios';
import { ScrollToBottomComponent } from "../scrollToBottom";

const BASE_URL = 'http://localhost:8000';
const request = axios.create({
 baseURL: BASE_URL
});

const EventSourceChat = () => {
 const [userName, setUserName] = useState('');
 const [messages, setMessages] = useState([]);
 const [value, setValue] = useState("");

 const subscribe = async () => {
  const eventSource = new EventSource(`${BASE_URL}/connect`);
  eventSource.onmessage = function (event) {
   console.log(`data:${event.data}`);
   const message = JSON.parse(event.data);
   setMessages((prev) => [...prev, message]);
  };
 };
 useEffect(() => {
  const userName = localStorage.getItem('userName');
  setUserName(userName);
  subscribe();
 }, []);

 const sendMessage = async () => {
  await request.post('/messages', {
   userName,
   text: value,
   date: Date.now()
  });
 };

 return (
  <div className="container">
   <div className="form">
    {userName}:
    <input
     type="text"
     value={value}
     onChange={e => setValue(e.target.value)} />
    <button onClick={sendMessage}>Send message</button>
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

export default EventSourceChat;
