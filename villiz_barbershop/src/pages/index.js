import * as React from "react"
import HeroSection from "../components/Hero/HeroSection"
import AboutUs from "../components/AboutUs/AboutUs"
import Gallery from "../components/Gallery/Gallery"
import AboutUs2 from "../components/AboutUs/AboutUs2"
import OurTeam from "../components/OurTeam/OurTeam"
import PriceList from "../components/PriceList/PriceList"
import Reviews from "../components/Reviews/Reviews"
import Layout from "../components/Layout"

export default function Home() {
  return (


    <Layout>
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
