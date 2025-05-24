// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2a2a3f;
  height: 100vh;
  padding: 20px;
  color: white;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
