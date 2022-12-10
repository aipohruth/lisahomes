import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Location from "./Components/Location";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Topbar from "./Components/Topbar";



function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <About />
      <Location  />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
