import React from 'react';

const Achievement = ({ achievements = [] }) => {
  const defaultAchievements = [
    { id: 1, name: 'First Lesson', description: 'Complete your first lesson', unlocked: false },
    { id: 2, name: 'Quiz Master', description: 'Score 100% on a quiz', unlocked: false },
    { id: 3, name: 'Investor Pro', description: 'Complete all lessons', unlocked: false },
    { id: 4, name: 'Chatbot Explorer', description: 'Ask 10 questions to the chatbot', unlocked: false }
  ];

  const displayAchievements = achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <div className="achievement">
      <h2>Achievements</h2>
      <div className="achievement-grid">
        {displayAchievements.map((achievement) => (
          <div key={achievement.id} className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
            <div className="achievement-icon">{achievement.unlocked ? '🏆' : '🔒'}</div>
            <h3>{achievement.name}</h3>
            <p>{achievement.description}</p>
            {achievement.unlocked && <span className="badge">Unlocked!</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
