import React from "react";
import NavbarSite from "../components/molecules/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <NavbarSite />

      <div className="flex w-full h-[85vh] flex-col justify-center items-center">
        <div className="text-5xl text-center text-bold">Hi, I'm Ariel Malada</div>
      </div>
    </>
  );
};

export default Home;
