import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Profile({ user, setUser }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user?.username || '');
  const [editedExperience, setEditedExperience] = useState(user?.experience || 'beginner');

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username: editedUsername,
      experience: editedExperience
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your progress? This will clear all your data.')) {
      localStorage.removeItem('user');
      localStorage.removeItem('hasVisited');
      window.location.reload();
    }
  };

  const stats = [
    { label: 'Lessons Completed', value: '2/6', icon: '📚' },
    { label: 'Quizzes Passed', value: '1/6', icon: '✅' },
    { label: 'Total Points', value: '50', icon: '🌟' },
    { label: 'Days Active', value: '3', icon: '📅' }
  ];

  const achievements = [
    { title: 'First Lesson', icon: '🎓', earned: true },
    { title: 'Quiz Master', icon: '🏆', earned: true },
    { title: 'Practice Pro', icon: '⭐', earned: false },
    { title: 'Perfect Score', icon: '🎖️', earned: false }
  ];

  return (
    <div className="profile-page" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <nav className="navbar">
        <div className="navbar-brand">InvestWise</div>
        <ul className="navbar-menu">
          <li><a href="/">Dashboard</a></li>
          <li><a href="/lessons">Lessons</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/practice">Practice</a></li>
          <li><a href="/profile" className="active">Profile</a></li>
        </ul>
      </nav>

      <div className="page-container">
        <div className="card" style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ color: '#333', margin: 0 }}>My Profile</h1>
            <button
              className="btn btn-primary"
              onClick={() => setIsEditing(!isEditing)}
              style={{ padding: '10px 20px' }}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing ? (
            <div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                  Username
                </label>
                <input
                  type="text"
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                  Experience Level
                </label>
                <select
                  value={editedExperience}
                  onChange={(e) => setEditedExperience(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    backgroundColor: 'white'
                  }}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button className="btn btn-primary" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: '600', color: '#666' }}>Username: </span>
                <span style={{ color: '#333', fontSize: '1.1rem' }}>{user?.username || 'Not set'}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: '600', color: '#666' }}>Experience: </span>
                <span style={{ color: '#333', fontSize: '1.1rem', textTransform: 'capitalize' }}>
                  {user?.experience || 'Not set'}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: '600', color: '#666' }}>Joined: </span>
                <span style={{ color: '#333', fontSize: '1.1rem' }}>
                  {user?.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : 'Unknown'}
                </span>
              </div>
            </div>
          )}
        </div>

        <h2 style={{ color: 'white', marginBottom: '20px' }}>Your Statistics</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', padding: '25px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#667eea', marginBottom: '5px' }}>
                {stat.value}
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ color: 'white', marginBottom: '20px' }}>Achievements</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: 'center',
                padding: '20px',
                opacity: achievement.earned ? 1 : 0.4,
                border: achievement.earned ? '2px solid #4CAF50' : 'none'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{achievement.icon}</div>
              <div style={{ color: '#333', fontWeight: '600', fontSize: '0.9rem' }}>
                {achievement.title}
              </div>
              {achievement.earned && (
                <div style={{ color: '#4CAF50', fontSize: '0.8rem', marginTop: '5px' }}>✓ Earned</div>
              )}
            </div>
          ))}
        </div>

        <div className="card" style={{ background: '#fff3cd', border: '2px solid #ffc107' }}>
          <h3 style={{ color: '#856404', marginBottom: '10px' }}>⚠️ Danger Zone</h3>
          <p style={{ color: '#856404', marginBottom: '15px' }}>
            Reset all your progress and start fresh. This action cannot be undone.
          </p>
          <button
            className="btn btn-secondary"
            onClick={handleReset}
            style={{ background: '#dc3545', color: 'white' }}
          >
            Reset Progress
          </button>
        </div>

        <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ marginTop: '30px' }}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Profile;
