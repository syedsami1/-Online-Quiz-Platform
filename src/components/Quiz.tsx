import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizProps {
  quizzes: { title: string; questions: Question[] }[];
}

const Quiz: React.FC<QuizProps> = ({ quizzes }) => {
  const { id } = useParams<{ id: string }>();
  const quiz = quizzes[Number(id)];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (option: string) => {
    if (answered) return;
    if (option === quiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    }
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {currentQuestion < quiz.questions.length ? (
        <div>
          <p>{quiz.questions[currentQuestion].question}</p>
          {quiz.questions[currentQuestion].options.map((opt: string, index: number) => (
            <button key={index} onClick={() => handleAnswer(opt)}>{opt}</button>
          ))}
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div>
          <h3>Your Score: {score}/{quiz.questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
