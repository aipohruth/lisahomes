import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Location from "./Location";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Topbar from "./Topbar";
const Home = () => {
  return (
    <div>
       <Topbar />
      <Navbar />
      <About />
      <Location  />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
