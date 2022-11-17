import { Navbar, Typography } from "@material-tailwind/react";
import React from "react";
import { useSectionContext } from "../../contexts/useSection.context";
import useScrollPosition from "../../hooks/useScroll.hook";
// import NavbarItem from "../atoms/NavbarItem";

const navbarItemsClass = `flex items-center transition-colors `;
const Pages = () => {
  const sectionState = useSectionContext();
  const { section } = sectionState;
  return (
    <div className="flex items-center justify-between mx-auto text-[#EADDFF]  font-medium list-none">
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#about"
          className={`${navbarItemsClass} ${
            section === "about" ? "!underline" : "no-underline"
          }`}
        >
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#experience"
          className={`${navbarItemsClass} ${
            section === "experience" ? "!underline" : "no-underline"
          }`}
        >
          Experience
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#skills"
          className={`${navbarItemsClass} ${
            section === "skills" ? "!underline" : "no-underline"
          }`}
        >
          Skills
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#achievements"
          className={`${navbarItemsClass} ${
            section === "achievements" ? "!underline" : "no-underline"
          }`}
        >
          Achievements
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <a
          href="#contacts"
          className={`${navbarItemsClass} ${
            section === "contacts" ? "!underline" : "no-underline"
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
