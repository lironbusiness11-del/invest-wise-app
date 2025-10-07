import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const stats = [
    { label: 'Lessons Completed', value: 2, icon: '📚', color: '#4CAF50' },
    { label: 'Quizzes Passed', value: 1, icon: '✅', color: '#2196F3' },
    { label: 'Points Earned', value: 50, icon: '🌟', color: '#FF9800' },
    { label: 'Learning Streak', value: '3 days', icon: '🔥', color: '#F44336' }
  ];

  const quickActions = [
    { title: 'Continue Learning', path: '/lessons', icon: '📚', color: '#667eea' },
    { title: 'Take a Quiz', path: '/quizzes', icon: '🧐', color: '#764ba2' },
    { title: 'Practice Trading', path: '/practice', icon: '📊', color: '#26c6da' },
    { title: 'View Profile', path: '/profile', icon: '👤', color: '#66bb6a' }
  ];

  return (
    <div className="dashboard-page" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <nav className="navbar">
        <div className="navbar-brand">InvestWise</div>
        <ul className="navbar-menu">
          <li><a href="/" className="active">Dashboard</a></li>
          <li><a href="/lessons">Lessons</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/practice">Practice</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>

      <div className="page-container">
        <div className="card" style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#333', marginBottom: '10px' }}>
            Welcome back, {user?.username || 'Investor'}! 👋
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Ready to continue your investment education journey?
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="card" style={{
              textAlign: 'center',
              padding: '25px'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: stat.color,
                marginBottom: '5px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ color: 'white', marginBottom: '20px' }}>Quick Actions</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(action.path)}
              style={{
                cursor: 'pointer',
                padding: '30px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px'
              }}>
                {action.icon}
              </div>
              <h3 style={{
                color: action.color,
                marginBottom: '10px'
              }}>
                {action.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="card" style={{
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          border: '2px solid white'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>
            🎯 Your Learning Goals
          </h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Complete 3 more lessons to unlock the Advanced Trading module!
          </p>
          <div style={{
            background: '#e0e0e0',
            borderRadius: '10px',
            height: '10px',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              height: '100%',
              width: '40%',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          <p style={{ color: '#666', marginTop: '10px', fontSize: '0.9rem' }}>
            2 of 5 lessons completed (40%)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
