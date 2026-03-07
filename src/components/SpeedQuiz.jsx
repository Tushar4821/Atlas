import React, { useState, useEffect } from "react";
import quizData from "../api/SpeedQuiz.json";

function SpeedQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(7);
  const [gameOver, setGameOver] = useState(false);

  const MAX_TIME = 7;

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const prepareQuestions = () => {
    const shuffledQuestions = shuffleArray(quizData)
      .slice(0, 10)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));

    setQuestions(shuffledQuestions);
  };

  useEffect(() => {
    prepareQuestions();
  }, []);

  const question = questions[currentQuestion];

  useEffect(() => {
    if (!question || gameOver) return;

    if (time === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, question, gameOver]);

  const nextQuestion = () => {
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
      setTime(MAX_TIME);
    } else {
      setGameOver(true);
    }
  };

  const handleAnswer = (option) => {
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }

    nextQuestion();
  };

  const restartQuiz = () => {
    prepareQuestions();
    setCurrentQuestion(0);
    setScore(0);
    setTime(MAX_TIME);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl w-full bg-[#1C1C1C] border border-gray-700 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Quiz Finished 🎉</h2>
          <p className="text-2xl mb-6">
            Your Score: <span className="text-green-400">{score}</span> / {questions.length}
          </p>

          <button
            onClick={restartQuiz}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Play Again
          </button>
        </div>
      </section>
    );
  }

  if (!question) {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <div className="max-w-2xl w-full bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700 shadow-xl">
        
        <div className="flex justify-between items-center mb-3 text-sm text-gray-300">
          <p>
            Question {currentQuestion + 1} / {questions.length}
          </p>
          <p className="text-red-400 font-bold">⏳ {time}s</p>
        </div>

        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-green-400 transition-all duration-1000 ease-linear"
            style={{ width: `${(time / MAX_TIME) * 100}%` }}
          ></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
          {question.question}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-400 p-4 rounded-xl text-left transition duration-200 cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeedQuiz;