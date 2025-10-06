import React from 'react';

const Lesson = ({ lessonData }) => {
  return (
    <div className="lesson">
      <h1>{lessonData?.title || 'Investment Basics'}</h1>
      <div className="lesson-content">
        <section className="lesson-section">
          <h2>Key Concepts</h2>
          <p>
            {lessonData?.content || 'Learn the fundamentals of investing, including stocks, bonds, mutual funds, and diversification strategies.'}
          </p>
        </section>
        <section className="lesson-section">
          <h2>Important Points</h2>
          <ul>
            <li>Understand your risk tolerance</li>
            <li>Start with a diversified portfolio</li>
            <li>Think long-term</li>
            <li>Stay informed about market trends</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Lesson;
