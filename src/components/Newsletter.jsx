import React from "react";

function Newsletter() {
  return (
    <section className="bg-black py-20 px-6 text-white">

      <div className="max-w-5xl mx-auto bg-[#1C1C1C] border border-gray-800 
                      rounded-2xl p-10 text-center shadow-lg">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          🌍 Stay Updated with GeoVerse
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Get interesting country facts, geography insights, and new features 
          delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-lg bg-black border border-gray-700 
                       text-white focus:outline-none focus:border-gray-400 
                       w-full md:w-80"
          />

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold
                       hover:bg-gray-200 transition"
          >
            Subscribe
          </button>

        </form>

        {/* Small text */}
        <p className="text-gray-500 text-sm mt-4">
          No spam. Only interesting geography content.
        </p>

      </div>

    </section>
  );
}

export default Newsletter;