// src/components/Message.js
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: ${props => (props.sender === 'user' ? '#6c63ff' : '#494c6b')};
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  align-self: ${props => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
`;

const Message = ({ sender, text }) => {
  return <MessageContainer sender={sender}>{text}</MessageContainer>;
};

export default Message;
