import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { useEffect } from "react";
const ChatSelectorComponent = (props) => {
 const navigate = useNavigate();
 const chats = props.chats || [];

 return (
  <div className="chat-selector-wrapper">
   {
    chats.map(({ name, path }) => (
     <div className="chat-name">
      <Link to={path}>{name}</Link></div>
    ))
   }
  </div>
 );
};


export default ChatSelectorComponent;