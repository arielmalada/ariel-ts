import React from "react";
import { animated, useSpring } from "react-spring";
import tw from "twin.macro";
import useScrollPosition from "../../hooks/useScroll";

const ScrollToTopContainer = tw.div`fixed right-10 bottom-10 z-20 rounded-md flex items-center justify-center w-10 h-10 bg-[#332D41] hover:bg-[#4A4458] hover:text-[#E8DEF8] cursor-pointer transition-colors`;

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const yCoordinates = useScrollPosition();
  const props = useSpring({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: yCoordinates > 300 ? 1 : 0,
  });

  const AnimatedScrollContainer = animated(ScrollToTopContainer);
  if(yCoordinates < 300) return null;
  return (
    <div>
      <AnimatedScrollContainer onClick={scrollToTop} style={props}>
        <svg
          width={16}
          height={10}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m.723 8.2 1.762 1.744L8.223 4.28l5.737 5.665L15.723 8.2 8.223.778.723 8.2Z"
            fill="#fff"
          />
        </svg>
      </AnimatedScrollContainer>
    </div>
  );
};

export default ScrollToTop;
