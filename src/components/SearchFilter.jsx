import React from 'react'

function SearchFilter({search,setSearch,filter,setFilter}) {

     const handleInputChange = (e) => {
        e.preventDefault()
       setSearch(e.target.value)
     }

     const handleSelectChange = (e) => {
        e.preventDefault()
       setFilter(e.target.value)
     }
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 
                bg-white/5 backdrop-blur-md border border-white/10 
                p-6 rounded-2xl">

  {/* Search Input */}
  <div className="w-full md:w-1/2">
    <input
      type="text"
      placeholder="🔍 Search for a country..."
      value={search}
      onChange={handleInputChange}
      className="w-full bg-[#1C1C1C] border border-white/10 
                 text-white placeholder-gray-400 
                 px-5 py-3 rounded-xl 
                 focus:outline-none focus:ring-2 focus:ring-white/20
                 focus:border-white/30
                 transition-all duration-300"
    />
  </div>

  {/* Filter Dropdown */}
  <div className="w-full md:w-1/4">
    <select
      value={filter}
      onChange={handleSelectChange}
      className="w-full bg-[#1C1C1C] border border-white/10 
                 text-white px-5 py-3 rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-white/20
                 focus:border-white/30
                 transition-all duration-300 cursor-pointer"
    >
      <option value="all">🌍 All Regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>

</div>
  )
}

export default SearchFilter