import React, { useState } from "react";
import CountryFacts from "../api/CountryData.json";
import { motion } from "framer-motion";

function About() {

  /* ==============================
     📊 LIVE DATA CALCULATIONS
  ============================== */

  const totalCountries = CountryFacts.length;

  const mostPopulated = CountryFacts.reduce((max, country) =>
    country.population > max.population ? country : max
  );

  const uniqueCapitals = new Set(
    CountryFacts.map((c) => c.capital)
  ).size;

  /* ==============================
     🎲 RANDOM FACT GENERATOR
  ============================== */

  const [randomCountry, setRandomCountry] = useState(null);

  const generateRandomFact = () => {
    const random =
      CountryFacts[Math.floor(Math.random() * CountryFacts.length)];
    setRandomCountry(random);
  };

  return (
    <>
      <section className="relative bg-black py-20 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full"></div>

        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Discover the World Beyond Maps 🌍
          </h2>
          <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            GeoVerse brings countries to life with fascinating facts, cultural
            insights, and powerful data — all in one immersive experience.
          </p>
        </div>

        {/* 🌍 GLOBAL STATS */}
        <div className="max-w-6xl mx-auto mt-20 mb-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: totalCountries, label: "Countries Indexed" },
            { number: mostPopulated.population.toLocaleString(), label: `Highest Population (${mostPopulated.countryName})` },
            { number: uniqueCapitals, label: "Unique Capitals" },
            { number: "7+", label: "Continents" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:scale-105 transition duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-3 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🌎 INTERACTIVE WORLD IMPACT */}
        <div className="max-w-6xl mx-auto mt-32 mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Geography Matters 🌎
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Culture",
                desc: "Geography shapes traditions, languages and identity."
              },
              {
                title: "Economy",
                desc: "Resources and location influence global trade."
              },
              {
                title: "Climate",
                desc: "Landforms impact weather and ecosystems."
              },
              {
                title: "Politics",
                desc: "Borders define nations and global relations."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#111] border border-white/5 p-8 rounded-2xl transition duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎲 RANDOM FACT GENERATOR */}
        <div className="max-w-4xl mx-auto text-center mt-32 mb-24">
          <h3 className="text-3xl font-bold text-white mb-8">
            Discover a Random Country 🎲
          </h3>

          <button
            onClick={generateRandomFact}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold 
                       hover:scale-105 transition duration-300"
          >
            Generate Random Fact
          </button>

          {randomCountry && (
            <motion.div
              key={randomCountry.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 bg-[#111] border border-white/5 rounded-2xl p-8"
            >
              <h4 className="text-2xl text-white font-semibold mb-4">
                {randomCountry.countryName}
              </h4>
              <p className="text-gray-400">
                {randomCountry.interestingFact}
              </p>
            </motion.div>
          )}
        </div>

        {/* Existing Country Cards */}
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CountryFacts.map((country, index) => {
            const { id, countryName, capital, population, interestingFact } = country;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-linear-to-br from-[#1a1a1a] via-[#111111] to-black 
                           border border-white/5 rounded-2xl p-8 
                           hover:-translate-y-3 hover:scale-[1.02] 
                           transition duration-300"
              >
                <p className="text-2xl font-semibold text-white mb-6">
                  {countryName}
                </p>

                <div className="space-y-3 text-gray-300">
                  <p><span className="text-white font-medium">Capital:</span> {capital}</p>
                  <p><span className="text-white font-medium">Population:</span> {population}</p>
                  <p><span className="text-white font-medium">Interesting Fact:</span> {interestingFact}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Our Vision
          </h2>
          <p className="text-gray-400 mt-6">
            GeoVerse aims to make geography engaging, interactive,
            and accessible to everyone around the world.
          </p>
        </div>

      </section>
    </>
  );
}

export default About;