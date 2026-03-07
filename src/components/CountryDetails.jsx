import React, { useState, useTransition, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryAlone } from "../api/PostApi";
import { SkeletonDetails } from "./SkeletonDetails";

function CountryDetails() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // ✅ FIXED

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await getCountryAlone(params.id);
      console.log(res);
      

      startTransition(() => {
        setCountry(res);
      });
    };

    fetchCountry();
  }, [params.id]); // ✅ added dependency


  const Info = ({ label, children }) => (
  <div>
    <p className="text-gray-400 text-xs uppercase tracking-wider">
      {label}
    </p>
    <p className="text-white font-medium mt-1">
      {children}
    </p>
  </div>
);

const StatCard = ({ title, value }) => (
  <div className="bg-white/5 backdrop-blur-lg border border-white/10
                  rounded-2xl p-6 text-center shadow-lg
                  hover:scale-105 transition duration-300">
    <p className="text-gray-400 text-sm">{title}</p>
    <h3 className="text-white text-xl font-semibold mt-2">
      {value}
    </h3>
  </div>
);

  // ✅ Loading Protection (VERY IMPORTANT)
 if (!country || !country.name) {
  return <SkeletonDetails />;
}

  return (
   
    <section className="relative min-h-screen bg-black text-gray-300 py-20 px-6 overflow-hidden">

  {/* 🌌 Soft Glow Background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 
                  w-175 h-175 
                  bg-blue-600/10 rounded-full blur-3xl">
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* 🌍 Hero Header */}
    <div className="mb-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
        {country.name.common}
      </h1>
      <p className="text-gray-400 mt-3 text-lg">
        {country.region} • {country.subregion}
      </p>
    </div>

    {/* 🧊 Main Glass Card */}
    <div className="backdrop-blur-lg bg-white/5 border border-white/10
                    rounded-3xl shadow-2xl p-10
                    grid md:grid-cols-2 gap-12 items-center">

      {/* Flag */}
      <div className="flex justify-center">
        <img
          src={country?.flags?.svg || country?.flags?.png}
          alt={country?.flags?.alt || country?.name?.official}
          className="w-full max-w-md rounded-3xl shadow-2xl 
                     hover:scale-105 transition duration-500"
        />
      </div>

      {/* Info */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-8">
          {country?.name?.official}
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 text-sm">

          <Info label="Native Names">
            {Object.keys(country?.name?.nativeName || {})
              .map((key) => country.name.nativeName[key].common)
              .join(", ") || "N/A"}
          </Info>

          <Info label="Top Level Domain">
            {country?.tld?.[0] || "N/A"}
          </Info>

          <Info label="Currencies">
            {Object.keys(country?.currencies || {})
              .map((cur) => country.currencies[cur].name)
              .join(", ") || "N/A"}
          </Info>

          <Info label="Languages">
            {Object.values(country?.languages || {}).join(", ") || "N/A"}
          </Info>

        </div>
      </div>
    </div>

    {/* 📊 Stats Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

      <StatCard title="Population" value={country.population.toLocaleString()} />
      <StatCard title="Capital" value={country.capital?.[0] || "N/A"} />
      <StatCard title="Region" value={country.region} />
      <StatCard title="Sub Region" value={country.subregion} />

    </div>

    {/* 🗺 Border Countries */}
    {country.borders && (
  <div className="mt-20">
    <h3 className="text-2xl font-semibold text-white mb-6">
      Border Countries
    </h3>

    <div className="flex flex-wrap gap-4">
      {country.borders.map((border) => (
        <NavLink key={border} to={`/country/${border}`}>
          <span
            className="px-5 py-2 bg-linear-to-r 
                       from-gray-800 to-gray-700
                       rounded-full text-sm text-white 
                       hover:scale-105 hover:from-gray-700 
                       hover:to-gray-600 transition cursor-pointer"
          >
            {border}
          </span>
        </NavLink>
      ))}
    </div>
  </div>
)}

    {/* 🔙 Back Button */}
    <div className="mt-20">
      <NavLink to="/country">
        <button className="px-8 py-3 rounded-xl 
                           bg-linear-to-r from-gray-800 to-gray-700
                           hover:from-gray-700 hover:to-gray-600
                           text-white font-medium
                           shadow-lg transition duration-300">
          ← Go Back
        </button>
      </NavLink>
    </div>

  </div>
</section>
  );
}

export default CountryDetails;