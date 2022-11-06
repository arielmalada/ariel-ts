import React, { useEffect, useRef } from "react";
import SubSectionTitle from "../components/atoms/SubSectionTitle";
import SectionTitle from "../components/atoms/SectionTitle";
import { Typography } from "@material-tailwind/react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import { useIsInViewport } from "../hooks/useInViewPort.hook";
import { useSectionContext } from "../contexts/useSection.context";

const Container = tw.div`flex items-center justify-center h-full`;

const AnimatedContainer = animated(Container);

const Skills: React.FC = () => {
  const refSection = useRef<HTMLDivElement>(null);
  const isInViewportSkills = useIsInViewport(refSection);
  const props = useSpring({
    config: { mass: 5, tension: 700, friction: 200 },
    x: isInViewportSkills ? 0 : -70,
    opacity: isInViewportSkills ? 1 : 0,
    delay: 200,
    reset: false,
  });
  const sectionContext = useSectionContext();

  useEffect(() => {
    if (isInViewportSkills) sectionContext.setSection("skills");
  }, [isInViewportSkills, sectionContext]);
  return (
    <section
      id="skills"
      className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col overflow-hidden"
    >
      <SectionTitle>Skills</SectionTitle>
      <AnimatedContainer style={props} ref={refSection}>
        <div className="w-full max-w-3xl pr-auto">
          <SubSectionTitle className="text-muted">Languages:</SubSectionTitle>
          <Typography variant="paragraph">
            Javascript, Typescript, CSS, SASS, SQL, PHP, Dart
          </Typography>
          <SubSectionTitle className="text-muted">Frameworks:</SubSectionTitle>
          <Typography variant="paragraph">
            React, Tailwind, SolidJS, Gatsby, Bootstrap, Material Design,
            ExpressJS
          </Typography>
          <SubSectionTitle className="text-muted">Databases:</SubSectionTitle>
          <Typography variant="paragraph">MySQL, MariaDB</Typography>
          <SubSectionTitle className="text-muted">Developer Tools:</SubSectionTitle>
          <Typography variant="paragraph">Git, VSCode, WSL, Postman, Lighthouse</Typography>
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default Skills;
