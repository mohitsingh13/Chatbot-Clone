// src/App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <ChatWindow />
      </div>
    </AppContainer>
  );
};

export default App;
