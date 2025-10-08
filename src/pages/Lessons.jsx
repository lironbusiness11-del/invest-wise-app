import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Lessons.css';

function Lessons() {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState([1, 2]);

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Investing',
      description: 'Learn the basics of investment and how markets work',
      duration: '15 min',
      level: 'Beginner',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Understanding Stocks',
      description: 'Deep dive into stock markets and how to analyze companies',
      duration: '20 min',
      level: 'Beginner',
      icon: '📈'
    },
    {
      id: 3,
      title: 'Bonds and Fixed Income',
      description: 'Explore the world of bonds and stable investments',
      duration: '18 min',
      level: 'Intermediate',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Portfolio Diversification',
      description: 'Master the art of spreading risk across investments',
      duration: '25 min',
      level: 'Intermediate',
      icon: '🎯'
    },
    {
      id: 5,
      title: 'Risk Management',
      description: 'Learn how to protect your investments and minimize losses',
      duration: '22 min',
      level: 'Advanced',
      icon: '🛡️'
    },
    {
      id: 6,
      title: 'Technical Analysis',
      description: 'Master chart patterns and trading indicators',
      duration: '30 min',
      level: 'Advanced',
      icon: '📊'
    }
  ];

  const handleLessonClick = (lessonId) => {
    // Mark lesson as completed
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    alert(`Starting lesson ${lessonId}. Full lesson content would be displayed here.`);
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      default: return '#666';
    }
  };

  return (
    <div className="lessons-page">
      <nav className="navbar">
        <div className="navbar-brand">InvestWise</div>
        <ul className="navbar-menu">
          <a href="/">Dashboard</a>
          <a className="active" href="/lessons">Lessons</a>
          <a href="/quizzes">Quizzes</a>
          <a href="/practice">Practice</a>
          <a href="/profile">Profile</a>
        </ul>
      </nav>

      <div className="page-container">
        <div className="lessons-header">
          Investment Lessons
          Build your financial knowledge step by step
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-number">{completedLessons.length}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">{lessons.length - completedLessons.length}</span>
              <span className="stat-label">Remaining</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {Math.round((completedLessons.length / lessons.length) * 100)}%
              </span>
              <span className="stat-label">Progress</span>
            </div>
          </div>
        </div>

        <div className="lessons-grid">
          {lessons.map(lesson => (
            <div
              key={lesson.id}
              className={`lesson-card ${
                completedLessons.includes(lesson.id) ? 'completed' : ''
              }`}
              onClick={() => handleLessonClick(lesson.id)}
            >
              <div className="lesson-icon">{lesson.icon}</div>
              <div className="lesson-content">
                {lesson.title}
                {lesson.description}
                <div className="lesson-meta">
                  <span className="lesson-duration">⏱️ {lesson.duration}</span>
                  <span
                    className="lesson-level"
                    style={{ color: getLevelColor(lesson.level) }}
                  >
                    {lesson.level}
                  </span>
                </div>
              </div>
              {completedLessons.includes(lesson.id) && (
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

export default Lessons;
