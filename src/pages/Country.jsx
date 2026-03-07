import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/PostApi";
import { CountryCard } from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";
import compareData from '../api/CountryCompareData.json'

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await getCountry();

      startTransition(() => {
        setCountries(res);
      });
    };

    fetchCountries();
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  const filterRegionCountry = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegionCountry(country)
  );

  const isSelected = (countryName) => {
    return selectedCountries.some(
      (country) => country.name.common === countryName
    );
  };

  const handleCompareToggle = (country) => {
    const alreadySelected = isSelected(country.name.common);

    if (alreadySelected) {
      setSelectedCountries((prev) =>
        prev.filter((item) => item.name.common !== country.name.common)
      );
      return;
    }

    if (selectedCountries.length >= 3) {
      alert("You can compare up to 3 countries only.");
      return;
    }

    setSelectedCountries((prev) => [...prev, country]);
  };

  const clearComparison = () => {
    setSelectedCountries([]);
  };

  const formatPopulation = (num) => {
    return num ? num.toLocaleString() : "N/A";
  };

  const formatArea = (num) => {
    return num ? `${num.toLocaleString()} km²` : "N/A";
  };
  const getExtraCountryData = (countryName) => {
  return compareData.find((item) => item.name === countryName);
};

  return (
    <section className="bg-black min-h-screen px-6 md:px-16 py-12">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Explore The World
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Discover countries, populations, regions and capitals 🌍
        </p>
      </div>

      {/* Compare Panel */}
      <div className="max-w-7xl mx-auto mb-12 rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Compare Countries
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Select up to 3 countries to compare land size, population,
              capital, region, and more.
            </p>
          </div>

          {selectedCountries.length > 0 && (
            <button
              onClick={clearComparison}
              className="px-4 py-2 rounded-lg border border-red-400/30 text-red-300 hover:bg-red-500/10 transition"
            >
              Clear Comparison
            </button>
          )}
        </div>

        {selectedCountries.length === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 bg-black/40 p-8 text-center">
            <p className="text-gray-500">
              No countries selected yet. Click{" "}
              <span className="text-white font-medium">Compare</span> on any
              country card below.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {selectedCountries.map((country) => {
  const extra = getExtraCountryData(country.name.common);

  return (
    <div
      key={country.name.common}
      className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] p-5 shadow-md"
    >
      <div className="flex items-center gap-4 mb-4">
        <img
          src={country.flags?.svg || country.flags?.png}
          alt={country.name.common}
          className="w-16 h-12 object-cover rounded-md border border-white/10"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">
            {country.name.common}
          </h3>
          <p className="text-sm text-gray-400">{country.region}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Capital</span>
          <span className="text-white font-medium text-right">
            {country.capital?.[0] || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Population</span>
          <span className="text-white font-medium text-right">
            {formatPopulation(country.population)}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Land Size</span>
          <span className="text-white font-medium text-right">
            {formatArea(country.area)}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Region</span>
          <span className="text-white font-medium text-right">
            {country.region || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Subregion</span>
          <span className="text-white font-medium text-right">
            {country.subregion || "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Languages</span>
          <span className="text-white font-medium text-right">
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "N/A"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Currency</span>
          <span className="text-white font-medium text-right">
            {country.currencies
              ? Object.values(country.currencies)
                  .map((cur) => cur.name)
                  .join(", ")
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-white/10 space-y-3 text-sm">
        <h4 className="text-white font-semibold">Travel & Culture</h4>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Food</span>
          <span className="text-white font-medium text-right">
            {extra?.food?.join(", ") || "Coming Soon"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Tourism</span>
          <span className="text-white font-medium text-right">
            {extra?.tourism?.join(", ") || "Coming Soon"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Best Time</span>
          <span className="text-white font-medium text-right">
            {extra?.bestTimeToVisit || "Coming Soon"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Trip Budget</span>
          <span className="text-white font-medium text-right">
            {extra?.tripBudget || "Coming Soon"}
          </span>
        </div>

        <div className="flex justify-between gap-4 border-b border-white/5 pb-2">
          <span className="text-gray-400">Safety Level</span>
          <span className="text-white font-medium text-right">
            {extra?.safetyLevel || "Coming Soon"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-400">Cost Level</span>
          <span className="text-white font-medium text-right">
            {extra?.costLevel || "Coming Soon"}
          </span>
        </div>
      </div>

      <button
        onClick={() => handleCompareToggle(country)}
        className="w-full mt-5 bg-red-500/10 text-red-300 border border-red-400/20 py-2.5 rounded-lg hover:bg-red-500/20 transition"
      >
        Remove
      </button>
    </div>
  );
})}
          </div>
        )}
      </div>

      {/* Loading State */}
      {isPending && (
        <div className="text-center text-gray-400 text-lg mb-8">
          Loading countries...
        </div>
      )}

      {/* Countries Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {filterCountries.map((curCountry) => {
    const selected = isSelected(curCountry.name.common);

    return (
      <li key={curCountry.name.common} className="list-none">
        <CountryCard
          country={curCountry}
          selected={selected}
          onCompare={handleCompareToggle}
        />
      </li>
    );
  })}
</ul>
    </section>
  );
}

export default Country;