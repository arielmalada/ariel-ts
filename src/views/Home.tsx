import React from "react";
import { useTrail, a } from "react-spring";
import NavbarSite from "../components/molecules/Navbar";

const Trail: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    from: { opacity: 0 },
    to: { opacity: 1},
  });
  return (
    <div className="space-x-2">
      {trail.map(({ ...style }, index) => (
        <a.span key={index} style={style}>
          <a.span>{items[index]}</a.span>
        </a.span>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <NavbarSite />

      <div className="flex w-full h-[90vh] flex-col justify-center items-center">
        <div className="text-5xl text-bold tracking-tighter will-change-[transform, opacity]">
          <Trail>
            <span>Hi,</span>
            <span>I'm</span>
            <span>Ariel</span>
            <span>Malada</span>
          </Trail>
        </div>
      </div>
    </>
  );
};

export default Home;
