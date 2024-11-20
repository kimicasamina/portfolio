import React from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import { pepe } from "./asset/index";
import { useGlitch } from "react-powerglitch";
export default function App() {
  const glitch = useGlitch();
  return (
    <div className="app w-full max-w-[1440px] h-full flex flex-col relative ">
      <Nav />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <span className="fixed w-auto right-[50px] bottom-[50px] flex flex-col place-items-end">
        <img
          src={pepe}
          alt=""
          className="w-[44px] h-[44px] rounded-full self-end justify-end "
          ref={glitch.ref}
        />

        <a
          href="https://github.com/kimicasamina?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-200 text-[12px]"
        >
          Link to Github
        </a>
      </span>
    </div>
  );
}
