import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Quizzes.css';

function Quizzes() {
  const navigate = useNavigate();
  const [completedQuizzes, setCompletedQuizzes] = useState([1]);

  const quizzes = [
    {
      id: 1,
      title: 'Investment Basics Quiz',
      description: 'Test your knowledge of fundamental investment concepts',
      questions: 10,
      duration: '10 min',
      difficulty: 'Easy',
      icon: '🧐',
      reward: 50
    },
    {
      id: 2,
      title: 'Stock Market Challenge',
      description: 'Prove your understanding of how stock markets work',
      questions: 15,
      duration: '15 min',
      difficulty: 'Medium',
      icon: '📊',
      reward: 100
    },
    {
      id: 3,
      title: 'Portfolio Strategy Quiz',
      description: 'Master the art of building balanced portfolios',
      questions: 12,
      duration: '12 min',
      difficulty: 'Medium',
      icon: '🎯',
      reward: 100
    },
    {
      id: 4,
      title: 'Risk Management Expert',
      description: 'Advanced quiz on protecting and managing investments',
      questions: 20,
      duration: '20 min',
      difficulty: 'Hard',
      icon: '🛡️',
      reward: 200
    },
    {
      id: 5,
      title: 'Technical Analysis Master',
      description: 'Deep dive into charts, patterns, and indicators',
      questions: 18,
      duration: '18 min',
      difficulty: 'Hard',
      icon: '💻',
      reward: 200
    },
    {
      id: 6,
      title: 'Investment Pro Certification',
      description: 'Final comprehensive test covering all topics',
      questions: 30,
      duration: '30 min',
      difficulty: 'Expert',
      icon: '🏆',
      reward: 500
    }
  ];

  const handleQuizClick = (quizId) => {
    if (!completedQuizzes.includes(quizId)) {
      alert(`Starting quiz ${quizId}. You'll answer ${quizzes.find(q => q.id === quizId).questions} questions.`);
      // Simulate completing the quiz
      setCompletedQuizzes([...completedQuizzes, quizId]);
    } else {
      alert('You already completed this quiz! Try another one.');
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      case 'Expert': return '#9C27B0';
      default: return '#666';
    }
  };

  const totalPoints = completedQuizzes.reduce((sum, id) => {
    const quiz = quizzes.find(q => q.id === id);
    return sum + (quiz ? quiz.reward : 0);
  }, 0);

  return (
    <div className="quizzes-page">
      <nav className="navbar">
        <div className="navbar-brand">InvestWise</div>
        <ul className="navbar-menu">
          <a href="/">Dashboard</a>
          <a href="/lessons">Lessons</a>
          <a className="active" href="/quizzes">Quizzes</a>
          <a href="/practice">Practice</a>
          <a href="/profile">Profile</a>
        </ul>
      </nav>

      <div className="page-container">
        <div className="quizzes-header">
          <h1>Investment Quizzes</h1>
          <p>Challenge yourself and earn points</p>
          
          <div className="quiz-stats">
            <div className="stat">
              <span className="stat-number">{completedQuizzes.length}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">{totalPoints}</span>
              <span className="stat-label">Points Earned</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {Math.round((completedQuizzes.length / quizzes.length) * 100)}%
              </span>
              <span className="stat-label">Progress</span>
            </div>
          </div>
        </div>

        <div className="quizzes-grid">
          {quizzes.map(quiz => (
            <div
              key={quiz.id}
              className={`quiz-card ${
                completedQuizzes.includes(quiz.id) ? 'completed' : ''
              }`}
              onClick={() => handleQuizClick(quiz.id)}
            >
              <div className="quiz-icon">{quiz.icon}</div>
              <div className="quiz-content">
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <div className="quiz-meta">
                  <span className="quiz-questions">❓ {quiz.questions} questions</span>
                  <span className="quiz-duration">⏱️ {quiz.duration}</span>
                </div>
                <div className="quiz-footer">
                  <span
                    className="quiz-difficulty"
                    style={{ color: getDifficultyColor(quiz.difficulty) }}
                  >
                    {quiz.difficulty}
                  </span>
                  <span className="quiz-reward">🌟 {quiz.reward} pts</span>
                </div>
              </div>
              {completedQuizzes.includes(quiz.id) && (
                <div className="completed-badge">✓</div>
              )}
            </div>
          ))}
        </div>

        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Quizzes;
