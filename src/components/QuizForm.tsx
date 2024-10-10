import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const QuizForm: React.FC<{ onAddQuiz: (quiz: { title: string; questions: Question[] }) => void }> = ({ onAddQuiz }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<Question[]>([{ question: '', options: ['', '', '', ''], answer: '' }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddQuiz({ title, questions });
    setTitle('');
    setQuestions([{ question: '', options: ['', '', '', ''], answer: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" required />
      {questions.map((q, index) => (
        <div key={index}>
          <input
            value={q.question}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].question = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder="Question"
            required
          />
          {q.options.map((opt, idx) => (
            <input
              key={idx}
              value={opt}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].options[idx] = e.target.value;
                setQuestions(newQuestions);
              }}
              placeholder={`Option ${idx + 1}`}
              required
            />
          ))}
          <input
            value={q.answer}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].answer = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder="Correct Answer"
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddQuestion}>Add Question</button>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default QuizForm;
