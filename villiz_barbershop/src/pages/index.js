import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/Hero/HeroSection"
import AboutUs from "../components/AboutUs/AboutUs"
import Gallery from "../components/Gallery/Gallery"
import AboutUs2 from "../components/AboutUs/AboutUs2"
import OurTeam from "../components/OurTeam/OurTeam"
import Reviews from "../components/Reviews/Reviews"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <HeroSection/> 
      <AboutUs /> 
      <Gallery />
      <AboutUs2 />
      <OurTeam />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
