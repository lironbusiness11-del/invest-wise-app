import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Practice() {
  const navigate = useNavigate();
  const [completedScenarios, setCompletedScenarios] = useState([]);

  const scenarios = [
    {
      id: 1,
      title: 'First Stock Purchase',
      description: 'Practice buying your first stock with virtual money',
      difficulty: 'Beginner',
      reward: 100,
      icon: '📈'
    },
    {
      id: 2,
      title: 'Portfolio Rebalancing',
      description: 'Learn to adjust your portfolio based on market conditions',
      difficulty: 'Intermediate',
      reward: 200,
      icon: '⚖️'
    },
    {
      id: 3,
      title: 'Risk Assessment',
      description: 'Evaluate risk levels of different investment options',
      difficulty: 'Intermediate',
      reward: 150,
      icon: '🛡️'
    },
    {
      id: 4,
      title: 'Market Crash Simulation',
      description: 'Make decisions during a simulated market downturn',
      difficulty: 'Advanced',
      reward: 300,
      icon: '📉'
    },
    {
      id: 5,
      title: 'Day Trading Challenge',
      description: 'Try your hand at short-term trading strategies',
      difficulty: 'Expert',
      reward: 500,
      icon: '⚡'
    },
    {
      id: 6,
      title: 'Long-term Investment',
      description: 'Build a 10-year investment portfolio',
      difficulty: 'Intermediate',
      reward: 250,
      icon: '🏛️'
    }
  ];

  const handleScenarioClick = (scenarioId) => {
    if (!completedScenarios.includes(scenarioId)) {
      alert(`Starting scenario ${scenarioId}. This is a practice simulation.`);
      setCompletedScenarios([...completedScenarios, scenarioId]);
    } else {
      alert('You already completed this scenario! Try another one.');
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return '#4CAF50';
      case 'Intermediate': return '#FF9800';
      case 'Advanced': return '#F44336';
      case 'Expert': return '#9C27B0';
      default: return '#666';
    }
  };

  const totalReward = completedScenarios.reduce((sum, id) => {
    const scenario = scenarios.find(s => s.id === id);
    return sum + (scenario ? scenario.reward : 0);
  }, 0);

  return (
    <div className="practice-page" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <nav className="navbar">
        <div className="navbar-brand">InvestWise</div>
        <ul className="navbar-menu">
          <li><a href="/">Dashboard</a></li>
          <li><a href="/lessons">Lessons</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/practice" className="active">Practice</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>

      <div className="page-container">
        <div className="card" style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#333', marginBottom: '10px' }}>
            Practice Trading Scenarios
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Apply your knowledge in realistic market simulations
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            paddingTop: '20px',
            borderTop: '2px solid #f0f0f0',
            marginTop: '20px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea', marginBottom: '5px' }}>
                {completedScenarios.length}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Completed</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea', marginBottom: '5px' }}>
                {totalReward}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Points Earned</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea', marginBottom: '5px' }}>
                {Math.round((completedScenarios.length / scenarios.length) * 100)}%
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Progress</div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '25px',
          marginBottom: '30px'
        }}>
          {scenarios.map(scenario => (
            <div
              key={scenario.id}
              className="card"
              onClick={() => handleScenarioClick(scenario.id)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                opacity: completedScenarios.includes(scenario.id) ? 0.7 : 1
              }}
            >
              <div style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '15px' }}>
                {scenario.icon}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', gap: '10px' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#333', flex: 1 }}>
                  {scenario.title}
                </h3>
              </div>
              <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                {scenario.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid #f0f0f0'
              }}>
                <span style={{ color: getDifficultyColor(scenario.difficulty), fontWeight: '600' }}>
                  {scenario.difficulty}
                </span>
                <span style={{ color: '#FF9800', fontWeight: '600' }}>
                  🌟 {scenario.reward} pts
                </span>
              </div>
              {completedScenarios.includes(scenario.id) && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#4CAF50',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  ✓
                </div>
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

export default Practice;
