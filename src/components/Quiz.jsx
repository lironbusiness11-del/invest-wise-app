import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: 'What is diversification in investing?',
      options: ['Buying only one stock', 'Spreading investments across different assets', 'Selling all assets', 'Investing only in bonds'],
      correctAnswer: 1
    },
    {
      question: 'What does ROI stand for?',
      options: ['Return on Investment', 'Rate of Interest', 'Risk of Investment', 'Return on Interest'],
      correctAnswer: 0
    }
  ];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz">
      <h1>Investment Quiz</h1>
      {!showResults ? (
        <div className="quiz-question">
          <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results">
          <h2>Quiz Complete!</h2>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
