import React, { useState } from "react";
import { getCountry } from "../api/PostApi";
import { CountryCard } from "./CountryCard";

function RandomCountry() {

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomCountry = async () => {
    try {
      setLoading(true);

      const countries = await getCountry();

      if (!countries || countries.length === 0) {
        console.error("No countries found");
        return;
      }

      const randomIndex = Math.floor(Math.random() * countries.length);
      const randomCountry = countries[randomIndex];

      setCountry(randomCountry);

    } catch (error) {
      console.error("Error fetching country:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    {/* Header */}
    <div className="text-center mb-14">

      <h2 className="text-4xl md:text-5xl font-bold 
                     bg-linear-to-r from-white to-gray-400 
                     bg-clip-text text-transparent">
        🎲 Discover a Random Country
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Explore the world in a fun way. Click the button and GeoVerse
        will reveal a random country for you to discover.
      </p>

      <button
        onClick={getRandomCountry}
        className="mt-8 bg-white text-black px-8 py-3 rounded-xl 
                   font-semibold shadow-lg
                   hover:bg-gray-200 hover:scale-105 
                   active:scale-95 transition-all duration-300"
      >
        {loading ? "Loading..." : "🎲 Show Random Country"}
      </button>

    </div>

    {/* Country Card */}
    <div className="flex justify-center">
      {country && (
        <div className="w-full max-w-md">
          <CountryCard country={country} />
        </div>
      )}
    </div>

  </div>

</section>
  )
}

export default RandomCountry;