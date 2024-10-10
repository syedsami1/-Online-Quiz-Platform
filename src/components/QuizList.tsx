import React from 'react';
import { Link } from 'react-router-dom';

const QuizList: React.FC<{ quizzes: { title: string; id: number }[] }> = ({ quizzes }) => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
