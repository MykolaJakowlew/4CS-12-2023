import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { useEffect } from "react";
const ChatSelectorComponent = (props) => {
 const navigate = useNavigate();
 const chats = props.chats || [];

 useEffect(() => {
  const localUserName = localStorage.getItem('userName');
  if (!localUserName) {
   return navigate('/');
  }
 }, []);

 return (
  <div className="chat-selector-wrapper">
   {
    chats.map(chat => (<div className="chat-name"><Link to={chat.path}>{chat.name}</Link></div>))}
  </div>
 );
};


export default ChatSelectorComponent;