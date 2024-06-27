import React from "react";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col relative p-6 sm:p-16">
      <Nav />
      <Hero />
      <Portfolio />
    </div>
  );
}
