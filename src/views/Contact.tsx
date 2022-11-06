import React from "react";
import SectionTitle from "../components/atoms/SectionTitle";

const Contacts: React.FC = () => {
  return (
    <section id="contacts" className="relative h-[100vh] px-4 py-2 scroll-smooth flex flex-col">
      <SectionTitle>Contacts</SectionTitle>
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-3xl pr-auto">
          <ul className="fs-2">
            <li><a href="mailto:arielmalada@outlook.com">arielmalada@outlook.com</a></li>
            <li><a href="https://github.com/arielmalada">github</a></li>
            <li><a href="https://www.instagram.com/arielmld/">instagram</a></li>
            <li><a href="https://linkedin.com/in/arielmld">linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
