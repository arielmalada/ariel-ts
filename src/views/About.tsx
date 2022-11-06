import React from "react";
import SectionTitle from "../components/atoms/SectionTitle";

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[85vh] h-[85vh] px-4 py-2 scroll-smooth flex flex-col">
      <SectionTitle>
        About
      </SectionTitle>
      <div className="flex items-center justify-center h-full">
        <p className="max-w-3xl">
          I'm a front-end engineer with 3+ years of experience with ReactJS, and
          Javascript. Currently Studying Human Technology Interaction Master Degree Program at Tampere University. Love to create clean and reusable code. Always seek
          knowledge, be flexible to changes, and prioritize to work as a team to grow together
        </p>
      </div>
    </section>
  );
};

export default About;
