import { Link } from "react-router-dom";

function Quiz() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-4">
          🧠 GeoVerse Quiz Challenge
        </h1>

        <p className="text-gray-400 mb-12">
          Test your geography knowledge with these fun quizzes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Guess the Flag */}
          <Link to="/quiz/flag">
            <div className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-3">🏳 Guess the Flag</h2>
              <p className="text-gray-400">
                Identify the country by its national flag.
              </p>
            </div>
          </Link>

          {/* Guess the Country */}
          <Link to="/quiz/clues">
            <div className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-3">🗺 Country from Clues</h2>
              <p className="text-gray-400">
                Guess the country based on hints.
              </p>
            </div>
          </Link>

          {/* Speed Quiz */}
          <Link to="/quiz/speed">
            <div className="bg-[#1C1C1C] p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-3">⏱ Speed Quiz</h2>
              <p className="text-gray-400">
                Answer as many question as possible.
              </p>
            </div>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Quiz;