import * as React from "react"
import Navbar from "../components/Navbar/Navbar"
import HeroSection from "../components/Hero/HeroSection"
import AboutUs from "../components/AboutUs/AboutUs"
import Gallery from "../components/Gallery/Gallery"

export default function Home() {
  return (
    <div>
      <Navbar/>  
      <HeroSection/> 
      <AboutUs /> 
      <Gallery />
    </div>
  )
}
