import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Invest Wise - Investment Learning Platform</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Welcome to Invest Wise!</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
