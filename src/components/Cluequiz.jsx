import React, { useState, useEffect } from "react";
import quizData from "../api/ClueQuiz.json";


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function GuessCountryQuiz() {

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {

    const shuffled = [...quizData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setQuestions(shuffled);

  }, []);

  const question = questions[currentQuestion];

  useEffect(() => {
    if (question) {
      setShuffledOptions(shuffleArray(question.options));
    }
  }, [question]);

  const handleAnswer = (option) => {

    if (option === question.country) {

      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        setScore(score + 1);
        setCurrentQuestion(nextQuestion);
      } else {
        setScore(score + 1);
        setGameOver(true);
      }

    } else {
      setGameOver(true);
    }

  };

  const restartQuiz = () => {

    const shuffled = [...quizData]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);

  };

  if (questions.length === 0) return null;

  // Game Over
  if (gameOver) {

    return (
      <section className="min-h-screen bg-black flex items-center justify-center text-white">

        <div className="bg-[#1C1C1C] border border-white/10 p-12 rounded-3xl shadow-2xl text-center w-105">

          <h1 className="text-4xl font-bold mb-4">Game Over ❌</h1>

          <p className="text-gray-400 mb-2">Your Score</p>

          <p className="text-5xl font-bold text-yellow-400 mb-8">
            {score}
          </p>

          <button
            onClick={restartQuiz}
            className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Play Again
          </button>

        </div>

      </section>
    );
  }

  return (

    <section className="min-h-screen bg-black flex items-center justify-center p-6 text-white">

      <div className="relative bg-[#1C1C1C] border border-white/10 rounded-3xl p-10 w-120 shadow-2xl">

        {/* glow */}
       <div className="absolute -inset-1 bg-linear-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl opacity-30 pointer-events-none"></div>

        {/* top bar */}
        <div className="flex justify-between text-sm text-gray-400 mb-6">

          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>

          <span className="text-yellow-400 font-semibold">
            Score: {score}
          </span>

        </div>

        {/* progress */}
        <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
          <div
            className="bg-yellow-400 h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`
            }}
          ></div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">
          Guess The Country 🧠
        </h1>

        {/* clues */}
        <div className="space-y-3 mb-10">

          {question.clues.map((clue, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 p-4 rounded-xl text-gray-300"
            >
              🔎 {clue}
            </div>
          ))}

        </div>

        {/* options */}

        <div className="grid grid-cols-2 gap-4">

          {shuffledOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="bg-black border border-white/10 py-3 rounded-xl font-medium 
              hover:border-yellow-400 hover:bg-yellow-400 hover:text-black 
              transition duration-200 active:scale-95"
            >
              {option}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default GuessCountryQuiz;