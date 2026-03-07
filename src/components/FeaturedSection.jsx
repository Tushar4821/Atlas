import React, { useEffect, useState } from "react";
import { getCountry } from "../api/PostApi";
import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";



function FeaturedSection() {
    const [countries,setCountries] = useState([])

useEffect( ()=> {
    const fetchCountries = async() => {
        const res = await getCountry()
        setCountries(res.slice(0,6))

    }
    fetchCountries()
},[] )
  return (
    <section className="bg-black text-white py-16 px-6">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          🌍 Featured Countries
        </h2>
        <p className="text-gray-400 mt-3">
          Explore some of the most interesting countries around the world.
        </p>
      </div>

      {/* Countries Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-12">
        <Link to="/country">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Explore All Countries
          </button>
        </Link>
      </div>

    </section>
  );
}

export default FeaturedSection;