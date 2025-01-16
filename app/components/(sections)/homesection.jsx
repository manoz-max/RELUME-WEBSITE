"use client";
import Image from "next/image";
import "../../globals.css";
import cardImage from "../../assets/images/card.png";
import ShuffleButton from "../shufflebutton";
import { useState } from "react";

const HomeSection = () => {
  const [shuffleState, setShuffleState] = useState(0); // 0 = default, 1 = first click, 2 = second click

  const handleShuffle = () => {
    setShuffleState((prevState) => (prevState === 2 ? 1 : prevState + 1));
  };
  const ComponentImage1 = () => {
    return (
      <Image
        src={cardImage}
        alt="Relume Preview"
        height={180}
        className="ml-7 w-full sm:w-3/4 md:w-full lg:w-72"
      />
    );
  };
  const ComponentImage2 = () => {
    return (
      <Image
        src={cardImage}
        alt="Relume Preview"
        height={180}
        className="w-full sm:w-3/4 md:w-full lg:w-72"
      />
    );
  };
  const renderImages = () => {
    if (shuffleState === 1) {
      return (
        <div className="flex flex-wrap justify-center items-center gap-2">
          {[...Array(6)].map((_, index) => (
            <>
              <ComponentImage1 />
            </>
          ))}
        </div>
      );
    } else if (shuffleState === 2) {
      return (
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 w-full">
          <div className="text-center lg:text-left max-w-3xl px-4">
            <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-snug">
              Websites designed & built faster with AI
            </h1>
            <p className="text-black text-xl mt-6 sm:text-lg lg:text-xl">
              Use AI as your design ally, not as a replacement. Effortlessly
              generate sitemaps and wireframes for marketing websites in
              minutes.
            </p>
          </div>
          <ComponentImage1 />
        </div>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-col justify-evenly bg-gray-100 w-full group pt-6 h-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-full  gap-8">
        <ShuffleButton onClick={handleShuffle} />
        {renderImages()}
        <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:translate-x-5 lg:gap-8 items-center lg:items-start">
          <ComponentImage1 />
          <ComponentImage2 />
          <ComponentImage1 />
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
          <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-snug">
            Websites designed & built faster with AI
          </h1>
          <p className=" text-black text-xl mt-6 sm:text-lg lg:text-xl">
            Use AI as your design ally, not as a replacement. Effortlessly
            generate sitemaps and wireframes for marketing websites in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-x-5  lg:gap-8 items-center">
          <ComponentImage2 />
          <ComponentImage1 />
          <ComponentImage2 />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

