import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import SectionTitle from "../components/atoms/SectionTitle";
import {
  useSectionContext,
} from "../contexts/useSection.context";
import { useIsInViewport } from "../hooks/useInViewPort.hook";

const Container = tw.div`flex items-center justify-center h-full`;

const AnimatedContainer = animated(Container);

const About: React.FC = () => {
  const refSection = useRef<HTMLDivElement>(null);
  const isInViewportAbout = useIsInViewport(refSection);
  const props = useSpring({
    config: { mass: 5, tension: 700, friction: 200 },
    x: isInViewportAbout ? 0 : -70,
    opacity: isInViewportAbout ? 1 : 0,
    delay: 200,
    reset: false,
  });
  const sectionContext = useSectionContext();
  useEffect(() => {
    if (isInViewportAbout ) sectionContext.setSection("about");
  }, [isInViewportAbout, sectionContext]);
  return (
    <section
      id="about"
      className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col overflow-hidden"
    >
      <SectionTitle>About</SectionTitle>
      <AnimatedContainer style={props} ref={refSection}>
        <p className="max-w-3xl">
          I'm a front-end engineer with 3+ years of experience with ReactJS, and
          Javascript. Currently Studying Human Technology Interaction Master
          Degree Program at Tampere University. Love to create clean and
          reusable code. Always seek knowledge, be flexible to changes, and
          prioritize to work as a team to grow together
        </p>
      </AnimatedContainer>
    </section>
  );
};

export default About;
