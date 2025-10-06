import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! I\'m your investment assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      
      // Simple bot response logic
      setTimeout(() => {
        const botResponse = getBotResponse(inputText);
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 500);
      
      setInputText('');
    }
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('stock')) {
      return 'Stocks represent ownership in a company. They can provide growth potential but come with higher risk.';
    } else if (input.includes('bond')) {
      return 'Bonds are debt securities that typically offer lower returns than stocks but with less risk.';
    } else if (input.includes('diversif')) {
      return 'Diversification means spreading your investments across different asset types to reduce risk.';
    } else {
      return 'That\'s a great question! Consider exploring our lessons for more detailed information.';
    }
  };

  return (
    <div className="chatbot">
      <h2>Investment Assistant</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask me about investing..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
