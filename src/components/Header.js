// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #4b47a1;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Admin Panel</h1>
    </HeaderContainer>
  );
};

export default Header;
