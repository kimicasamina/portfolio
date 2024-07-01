import React from "react";

export default function Hero() {
  return (
    <section
      data-section
      id="hero"
      className="w-full h-screen flex flex-col justify-center sectionWrapper"
    >
      <div className="w-full sm:w-1/2">
        <div className="">
          <h1 className="mb-4 font-bold">Kimberly Casamina</h1>
          <p className="max-w-[450px]">
            illum ea quod aliquid nobis minima magnam, nemo consectetur quisquam
            odit, facilis quae laudantium architecto.
          </p>
        </div>
      </div>
    </section>
  );
}
