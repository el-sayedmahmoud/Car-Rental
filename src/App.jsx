/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { Component, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features"
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Testimonial from "./components/Testimonial/Testimonial";
import Cta1 from "./components/cta1/Cta1";
import Cta2 from "./components/cta2/Cta2";
import Footer from "./components/Footer/Footer";


const App = () => {
  ////  dark mode   ////////
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  /////////////////////////

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Features />
      <Services />
      <Projects />
      <Testimonial />
      <Cta1 />
      <Cta2 />
      <Footer />
    </div>
  );
}

export default App