import React, { useRef } from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import SectionTitle from "../components/atoms/SectionTitle";
import { useIsInViewport } from "../hooks/useInViewPort";

const Container = tw.div`flex items-center justify-center h-full`;

const AnimatedContainer = animated(Container);

const Contacts: React.FC = () => {
  const refSection = useRef<HTMLDivElement>(null);
  const isInViewportContacts = useIsInViewport(refSection);
  const props = useSpring({
    config: { mass: 5, tension: 700, friction: 200 },
    x: isInViewportContacts ? 0 : -70,
    opacity: isInViewportContacts ? 1 : 0,
    delay: 200,
    reset: false,
  });
  return (
    <section
      id="contacts"
      className="relative h-[100vh] px-4 py-2 scroll-smooth flex flex-col overflow-hidden"
    >
      <SectionTitle>Contacts</SectionTitle>
      <AnimatedContainer style={props} ref={refSection}>
        <div className="w-full max-w-3xl pr-auto">
          <ul className="fs-2">
            <li>
              <a href="mailto:arielmalada@outlook.com">
                arielmalada@outlook.com
              </a>
            </li>
            <li>
              <a href="https://github.com/arielmalada">github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/arielmld/">instagram</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/arielmld">linkedin</a>
            </li>
          </ul>
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default Contacts;
