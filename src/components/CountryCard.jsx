import React from "react";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country, onCompare, selected }) => {
  if (!country) return null;

  const countryName = country?.name?.common || "Unknown Country";
  const flagImage =
    country?.flags?.svg ||
    country?.flags?.png ||
    "https://flagcdn.com/w320/un.png";

  const populationFormatted = country?.population
    ? country.population.toLocaleString()
    : "N/A";

  return (
    <div
      className={`bg-[#1C1C1C] border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        selected
          ? "border-white ring-2 ring-white/30"
          : "border-gray-800 hover:border-gray-600"
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={flagImage}
          alt={countryName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          {countryName.length > 15
            ? countryName.slice(0, 15) + "..."
            : countryName}
        </h2>

        <div className="text-gray-400 text-sm space-y-1">
          <p>
            <span className="text-gray-200 font-medium">Population:</span>{" "}
            {populationFormatted}
          </p>
          <p>
            <span className="text-gray-200 font-medium">Region:</span>{" "}
            {country?.region || "N/A"}
          </p>
          <p>
            <span className="text-gray-200 font-medium">Capital:</span>{" "}
            {country?.capital?.[0] || "N/A"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => onCompare(country)}
            className={`w-full py-2 rounded-lg font-medium border transition ${
              selected
                ? "bg-white text-black border-white"
                : "bg-transparent text-white border-white/20 hover:border-white/50"
            }`}
          >
            {selected ? "Selected" : "Compare"}
          </button>

          {country?.cca3 ? (
            <NavLink
              to={`/country/${country.cca3}`}
              className="w-full bg-white text-black font-medium py-2 rounded-lg text-center transition-all duration-300 hover:bg-gray-300"
            >
              Read More →
            </NavLink>
          ) : (
            <div className="w-full bg-gray-700 text-gray-300 font-medium py-2 rounded-lg text-center cursor-not-allowed">
              Read More →
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
