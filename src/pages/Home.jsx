import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import ExploreRegions from '../components/ExploreRegions'
import RandomCountry from '../components/RandomCountry'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
   <>
   <HeroSection/>
   <FeaturedSection/>
   <ExploreRegions/>
   <RandomCountry/>
   <Newsletter/>
   </>
  )
}

export default Home