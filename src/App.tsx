import React from "react";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Contacts from "./views/Contact";
import Achievements from "./views/Achievements";
import ScrollToTop from "./components/atoms/ScrollToTop.atom";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contacts />
      <ScrollToTop/>
    </>
  );
}

export default App;
