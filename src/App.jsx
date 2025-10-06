import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Invest Wise</h1>
          <nav className="main-nav">
            <Link to="/">Dashboard</Link>
            <Link to="/lesson">Lessons</Link>
            <Link to="/quiz">Quiz</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/lesson" element={<LessonPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
