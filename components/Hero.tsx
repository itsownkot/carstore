"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="px-5">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Find, book, rent a car -- quickly and easly
        </h1>
        <p>
          Streamline your car rental exprtience with our effortless booking
          process.
        </p>
        <Button
          title="Explore cars"
          btnStyle="mt-4 text-white hover:scale-105"
          handleClick={handleScroll}
        />
      </div>
      <div className="relative h-[400px]">
        <div>
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="absolute z-10 object-contain"
          />
        </div>
        <div className="absolute bg-hero-bg h-[100%] w-[80%] bg-no-repeat bg-cover right-0 top-0" />
      </div>
    </div>
  );
};
export default Hero;
