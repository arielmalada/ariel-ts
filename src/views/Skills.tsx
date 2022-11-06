import React from "react";
import SubSectionTitle from "../components/atoms/SubSectionTitle";
import SectionTitle from "../components/atoms/SectionTitle";
import { Typography } from "@material-tailwind/react";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col"
    >
      <SectionTitle>Skills</SectionTitle>
      <div className="flex items-center justify-center h-full">
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
      </div>
    </section>
  );
};

export default Skills;
