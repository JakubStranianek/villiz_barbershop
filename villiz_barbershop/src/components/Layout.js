import React from 'react'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Contact from "./Contact/Contact"

export default function Layout( {children} ) {
  return (
    <div>
        <Navbar />
            {children}
            <Contact />
        <Footer />
    </div>
  )
}
