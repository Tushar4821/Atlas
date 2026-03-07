import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import worldImg from '../assets/world.png'
import { NavLink } from 'react-router-dom';

function HeroSection() {
  return (
   <main className="min-h-screen bg-black flex items-center">
  <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 w-full">
    <div className="grid md:grid-cols-2 items-center gap-12">

      {/* LEFT SIDE - TEXT */}
      <div className="space-y-6 pl-2 md:pl-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Explore the World, <br />
          <span className="text-gray-300">One Country at a Time.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg">
          Discover the history, culture, and beauty of every nation.
          Sort, search, and filter through countries to find the details
          you need.
        </p>

        <NavLink to="/country">
  <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
    Start Exploring
    <FaLongArrowAltRight />
  </button>
</NavLink>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex justify-center md:justify-end">
        <img
          src={worldImg}
          alt="World Map"
          className="w-[85%] md:w-full max-w-lg drop-shadow-2xl"
        />
      </div>

    </div>
  </div>
</main>
  )
}

export default HeroSection