import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import SectionTitle from "../components/atoms/SectionTitle";
import {
  useSectionContext,
} from "../contexts/useSection.context";
import { useIsInViewport } from "../hooks/useInViewPort.hook";

const Container = tw.div`flex flex-col items-center justify-center h-full`;

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
          I'm a front-end engineer with UX in mind with 3+ years of experience with ReactJS, and
          Javascript. I currently studying Human Technology Interaction Master's
          degree's program at Tampere University and completed Bachelor degree's in Computer Science program at IPB University.  
        </p>
        <p className="max-w-3xl mt-4">
          Always driven by my curiousity to learn something new. Used to study and build about mobile apps, robotics and game development. However, i decided to focus in frontend engineering and user experience. 
          Love to play co-op games with friends and card games. I also like to make cakes once in a while because it's fun and i can share some slices to anyone that i know.
        </p>
      </AnimatedContainer>
    </section>
  );
};

export default About;
