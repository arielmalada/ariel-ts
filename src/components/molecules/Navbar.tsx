import { Navbar, Typography } from "@material-tailwind/react";
import React from "react";
import tw from "twin.macro";
import useScrollPosition from "../../hooks/useScroll";
// import NavbarItem from "../atoms/NavbarItem";

const Pages = () => (
  <div className="flex items-center justify-between mx-auto text-[#CCC2DC] list-none ">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal text-current"
    >
      <a href="#about" className="flex items-center">
        About
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#experience" className="flex items-center">
        Experience
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#skills" className="flex items-center">
        Skills
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <a href="#contact" className="flex items-center">
        Contact
      </a>
    </Typography>
  </div>
);
const navbarClasses = `z-50 flex items-center fixed
justify-center w-[fit-content] mx-auto text-center bg-[#332D41] rounded-md shadow-lg shadow-light-200 px-4 py-2 md:!px-20 md:!py-2  
transition-all duration-300 `;
const NavbarSite: React.FC = () => {
  const yCoordinates = useScrollPosition();

  return (
    <div className="flex justify-center w-full">
      <Navbar
        className={
          yCoordinates < 80
            ? navbarClasses + "mt-20"
            : navbarClasses + "mt-2"
        }
      >
        <Pages />
      </Navbar>
    </div>
  );
};

export default NavbarSite;
