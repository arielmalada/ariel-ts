import { Navbar, Typography } from "@material-tailwind/react";
import React from "react";
import { useSectionContext } from "../../contexts/useSection.context";
import useScrollPosition from "../../hooks/useScroll.hook";
// import NavbarItem from "../atoms/NavbarItem";

const Pages = () => {
  const sectionState = useSectionContext();
  const { section } = sectionState;
  return (
    <div className="flex items-center justify-between mx-auto text-[#EADDFF] font-medium list-none">
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#about"
          className={`flex items-center transition-colors ${
            section === "about" ? "underline" : ""
          }`}
        >
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#experience"
          className={`flex items-center transition-colors ${
            section === "experience" ? "underline" : ""
          }`}
        >
          Experience
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#skills"
          className={`flex items-center transition-colors ${
            section === "skills" ? "underline" : ""
          }`}
        >
          Skills
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#achievements"
          className={`flex items-center transition-colors ${
            section === "achievements" ? "underline" : ""
          }`}
        >
          Achievements
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#contacts"
          className={`flex items-center transition-colors ${
            section === "contacts" ? "underline" : ""
          }`}
        >
          Contacts
        </a>
      </Typography>
    </div>
  );
};
const navbarClasses = `z-50 flex items-center fixed rounded-b-xl
justify-center w-[fit-content] mx-auto text-center bg-[#1C1B1F] px-4 py-2 md:!px-20 md:!py-2  
transition-all duration-300 `;
const NavbarSite: React.FC = () => {
  const yCoordinates = useScrollPosition();

  return (
    <div className="flex justify-center w-full">
      <Navbar
        className={yCoordinates < 80 ? navbarClasses + "mt-20" : navbarClasses}
      >
        <Pages />
      </Navbar>
    </div>
  );
};

export default NavbarSite;
