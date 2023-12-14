import './style.css';
import LoginComponent from './login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LongPollingChat from './long-polling';
import ChatSelectorComponent from './chatSelector';
import HeaderComponent from './header';
import React from 'react';
import EventSourceChat from './event-source/event-source';

function App () {

  const chats = [
    { name: 'event source', path: 'event-source' },
    { name: 'long polling', path: 'long-polling' },
  ];

  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginComponent />} />
        <Route element={<HeaderComponent />}>
          <Route path='/chat' element={<ChatSelectorComponent chats={chats} />} />
          <Route path='/chat/long-polling' element={<LongPollingChat />} />
          <Route path='/chat/event-source' element={<EventSourceChat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
