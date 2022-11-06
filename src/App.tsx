import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Contacts from "./views/Contact";
import Achievements from "./views/Achievements";
import ScrollToTop from "./components/atoms/ScrollToTop.atom";
import { SectionContext, SectionTypes } from "./contexts/useSection.context";
import { useState } from "react";

function App() {
  const [section, setSection] = useState<SectionTypes>("home");
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <Home />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contacts />
      <ScrollToTop />
    </SectionContext.Provider>
  );
}

export default App;
