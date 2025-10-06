import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Investment Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Progress</h3>
          <p className="stat-value">0%</p>
        </div>
        <div className="stat-card">
          <h3>Lessons Completed</h3>
          <p className="stat-value">0/10</p>
        </div>
        <div className="stat-card">
          <h3>Quiz Score</h3>
          <p className="stat-value">0/100</p>
        </div>
        <div className="stat-card">
          <h3>Achievements</h3>
          <p className="stat-value">0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
