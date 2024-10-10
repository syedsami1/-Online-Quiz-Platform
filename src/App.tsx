import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizForm from './components/QuizForm';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<{ title: string; questions: any[] }[]>([]);

  const handleAddQuiz = (quiz: { title: string; questions: any[] }) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <Router>
      <div>
        <h1>Online Quiz Platform</h1>
        <Routes>
          <Route path="/" element={<QuizForm onAddQuiz={handleAddQuiz} />} />
          <Route path="/quizzes" element={<QuizList quizzes={quizzes.map((q, i) => ({ title: q.title, id: i }))} />} />
          <Route path="/quiz/:id" element={<Quiz quizzes={quizzes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
