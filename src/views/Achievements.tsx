import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import SectionTitle from "../components/atoms/SectionTitle";
import { useIsInViewport } from "../hooks/useInViewPort";

const Container = tw.div`flex items-center justify-center h-full`;

const AnimatedContainer = animated(Container);

const Achievements: React.FC = () => {
  const refSection = useRef<HTMLDivElement>(null);
  const isInViewportAchievements = useIsInViewport(refSection);
  const props = useSpring({
    config: { mass: 5, tension: 700, friction: 200 },
    x: isInViewportAchievements ? 0 : 70,
    opacity: isInViewportAchievements ? 1 : 0,
    delay: 200,
    reset: false,
  });
  return (
    <section id="achievements" className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col overflow-hidden">
      <SectionTitle >Achievements</SectionTitle>
      <AnimatedContainer style={props} ref={refSection}>
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
      </AnimatedContainer>
    </section>
  );
};

export default Achievements;
