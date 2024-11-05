import React from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Skills from "./component/Skills";

export default function App() {
  return (
    <div className="app w-full max-w-[1440px] h-full flex flex-col relative ">
      <Nav />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
