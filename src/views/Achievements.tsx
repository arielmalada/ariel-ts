import React from "react";
import SectionTitle from "../components/atoms/SectionTitle";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col">
      <SectionTitle >Achievements</SectionTitle>
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-3xl pr-auto">
          <ul >
            <li>Inclusive Cities Hackathon / 2022 / Participants</li>
            <li>Digital Construction Hackacthon PTPP / 2019 / Participants</li>
            <li>KRPAI Regional 2 / 2018 / Participants</li>
            <li>
              Shadowverse Indonesia Circuit: Brigade of the Sky / 2018 / Quarter
              Final
            </li>
            <li>
              Shadowverse Open South east asia: Brigade of The Sky / 2018 / Top
              16
            </li>
            <li>National Bridge Competition for College Students 18 & 19 / 2016 - 2017 / Participants</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
