import { useState } from 'react';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { quizQuestions } from './data/quizData';
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!currentQuestion) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="app">
        <Results
          score={score}
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧠 Tech Quiz Challenge</h1>
        <p>Terraform + React + Azure + GitHub</p>
      </header>

      <div className="quiz-container">
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </span>
        </div>

        {currentQuestion && (
          <Question
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showResult={showResult}
          />
        )}

        {showResult && (
          <button className="next-button" onClick={handleNextQuestion}>
            {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question →' : 'See Results 🎯'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App
