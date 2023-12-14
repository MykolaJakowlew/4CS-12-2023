import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LoginComponent = () => {
 const navigate = useNavigate();

 const [isEmpty, setIsEmpty] = useState(true);
 const inputRef = useRef();

 useEffect(() => {
  const userName = localStorage.getItem('userName');
  if (userName) {
   navigate('/chat');
  }
 }, []);

 const login = () => {
  let text = inputRef.current.value;
  text = text.trim();
  localStorage.setItem('userName', text);
  navigate('/chat');
 };

 const onChange = () => {
  let text = inputRef.current.value;
  text = text.trim();

  if (!text.length) {
   return setIsEmpty(true);
  }

  setIsEmpty(false);
 };

 return (
  <div className="login">
   User name:
   <input ref={inputRef} onChange={onChange} type="text" />
   <button onClick={login} disabled={isEmpty}>Login</button>
  </div>
 );
};

export default LoginComponent;