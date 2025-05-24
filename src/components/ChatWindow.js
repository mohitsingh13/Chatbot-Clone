import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Ask me anything ✨', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('https://your-vercel-url.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = { text: data.reply, isUser: false };
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { text: '⚠️ Error from server.', isUser: false }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;