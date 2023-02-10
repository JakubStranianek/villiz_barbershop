import * as React from "react"
import HeroSection from "../components/Hero/HeroSection"
import AboutUs from "../components/AboutUs/AboutUs"
import Gallery from "../components/Gallery/Gallery"
import AboutUs2 from "../components/AboutUs/AboutUs2"
import OurTeam from "../components/OurTeam/OurTeam"
import PriceList from "../components/PriceList/PriceList"
import Reviews from "../components/Reviews/Reviews"
import Layout from "../components/Layout"
import SplashScreen from "../components/SplashScreen/SplashScreen"
import { useState, useEffect } from "react"
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Home() {
const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}) 

  return (
    
    <Layout>
        {loading && (
          <SplashScreen />
        )}
        <HeroSection />
        <AboutUs />
        <Gallery />
        <AboutUs2 />
        <OurTeam />
        <PriceList />
        <Reviews />
      </Layout>
  )
}
