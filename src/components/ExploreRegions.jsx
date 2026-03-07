import React from "react";
import { Link } from "react-router-dom";

function ExploreRegions() {

  const regions = [
    { name: "Asia", emoji: "🌏" },
    { name: "Europe", emoji: "🌍" },
    { name: "Africa", emoji: "🌍" },
    { name: "Americas", emoji: "🌎" },
    { name: "Oceania", emoji: "🌊" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore by Region
        </h2>

        <p className="text-gray-400 mt-3">
          Browse countries by continent and discover new places.
        </p>
      </div>

      {/* Region Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

        {regions.map((region, index) => (
          <Link
            key={index}
            to={`/country?region=${region.name}`}
            className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-8 
                       text-center hover:scale-105 hover:bg-white hover:text-black 
                       transition duration-300 shadow-lg"
          >
            <div className="text-4xl mb-3">
              {region.emoji}
            </div>

            <h3 className="text-lg font-semibold">
              {region.name}
            </h3>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default ExploreRegions;