import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import SectionTitle from "../components/atoms/SectionTitle";
import { useSectionContext } from "../contexts/useSection.context";
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
    if (isInViewportAbout) sectionContext.setSection("about");
  }, [isInViewportAbout, sectionContext]);
  return (
    <section
      id="about"
      className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col overflow-hidden"
    >
      <SectionTitle>About</SectionTitle>
      <AnimatedContainer style={props} ref={refSection}>
        <p className="max-w-3xl">
          I'm a front-end engineer with UX in mind with 3+ years of experience
          with ReactJS, and Javascript. I currently studying Human Technology
          Interaction Master's degree's program at Tampere University and
          completed Bachelor degree's in Computer Science program at IPB
          University.
        </p>
        <p className="max-w-3xl mt-4">
          Always driven by my curiosity to learn something new. Used to study
          and build mobile apps, robotics, and game development. Recently, I
          mostly work and study on frontend engineering and user experience.
          Nevertheless, I’m still learning something new and listening to other
          people's thoughts every day to keep building my knowledge. Love to
          play co-op games with friends and card games. I also like to make
          cakes once in a while because it's fun and I can share some slices
          with anyone that I know.
        </p>
      </AnimatedContainer>
    </section>
  );
};

export default About;
