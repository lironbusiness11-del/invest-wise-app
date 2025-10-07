import { useState } from 'react';
import '../App.css';

function WelcomeScreen({ onComplete }) {
  const [username, setUsername] = useState('');
  const [experience, setExperience] = useState('beginner');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      const userData = {
        username: username.trim(),
        experience,
        joinedDate: new Date().toISOString()
      };
      onComplete(userData);
    }
  };

  return (
    <div className="welcome-screen" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '50px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px'
          }}>
            Welcome to InvestWise
          </h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>
            Your journey to financial wisdom starts here
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              What should we call you?
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              Investment Experience Level
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e0e0e0',
                borderRadius: '10px',
                fontSize: '1rem',
                backgroundColor: 'white'
              }}
            >
              <option value="beginner">Beginner - New to investing</option>
              <option value="intermediate">Intermediate - Some experience</option>
              <option value="advanced">Advanced - Experienced investor</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '15px',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1.1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
          >
            Start Learning
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>
            📚 Learn • 🎯 Practice • 🏆 Master Your Finances
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
