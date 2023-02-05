import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Contact from "./Contact/Contact"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default function Layout( {children} ) {  
  return (
    <div>
        <Navbar/>
            {children}
            <Contact />
        <Footer />
    </div>
  )
}
