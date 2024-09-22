import React from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import pepe from "./asset/gif/_.gif";
import { useGlitch } from "react-powerglitch";

export default function App() {
  const glitch = useGlitch();
  return (
    <div className="app w-full h-full flex flex-col relative">
      <img
        src={pepe}
        alt=""
        className="w-[58px] h-[58px] rounded-full border-none outline-none  fixed right-14 top-[160px]"
        ref={glitch.ref}
      />
      <Nav />
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}
