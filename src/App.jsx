import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ServicesDisplay from "./components/ServicesDisplay/ServicesDisplay";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ServicesDisplay />
      <Projects />
    </div>
  );
}

export default App;
