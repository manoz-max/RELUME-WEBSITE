"use client";
import Image from "next/image";
import "../../globals.css";
import cardImage from "../../assets/images/card.png";
import { useState } from "react";
import ShuffleButton from "../shufflebutton";

const HomeSection = () => {
  const [shuffleState, setShuffleState] = useState(0);

  const handleShuffle = () => {
    setShuffleState((prevState) => (prevState === 2 ? 0 : prevState + 1));
  };
  const ImageComponent = ({ additionalClasses = "" }) => (
    <Image
      src={cardImage}
      alt="Relume Preview"
      height={180}
      // className={`w-full sm:w-3/4 md:w-full lg:w-72 ${additionalClasses}`}
      className={`w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:w-72 ${additionalClasses}`}
    />
  );
  const LeftSideImages = () => (
    <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:translate-x-5 lg:gap-8 items-center lg:items-start">
      <ImageComponent additionalClasses="ml-7" />
      <ImageComponent />
      <ImageComponent additionalClasses="ml-7" />
    </div>
  );
  const RightSideImages = () => {
    return (
      <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-x-5  lg:gap-8 items-center">
        <ImageComponent />
        <ImageComponent additionalClasses="ml-8" />
        <ImageComponent />
      </div>
    );
  };
  const Content = ({ additionalClass = "" }) => {
    return (
      <div
        className={`flex flex-col justify-center text-center max-w-3xl h-auto ${additionalClass}`}
      >
        <h1 className="text-gray-900 font-black text-4xl sm:text-6xl lg:text-8xl leading-tight">
          Websites designed & built faster with AI
        </h1>
        <p className="text-black text-base sm:text-lg lg:text-xl mt-4">
          Use AI as your design ally, not as a replacement. Effortlessly
          generate sitemaps and wireframes for marketing websites in minutes.
        </p>
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-evenly bg-gray-100 w-full group pt-6 h-[500px]">
      <div className="flex flex-col items-center gap-8">
        <ShuffleButton onClick={handleShuffle} />
        {shuffleState === 0 && (
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-full gap-8  px-4 h-full">
            <LeftSideImages />
            <Content />
            <RightSideImages />
          </div>
        )}
        {shuffleState === 1 && (
          <div className="flex flex-col w-full gap-8 px-4 h-full">
            <div className="grid grid-cols-4 md:grid-cols-4 h-auto">
              {[...Array(4)].map((_, index) => (
                <ImageComponent key={index} />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 h-auto">
              <div className="lg:w-3/5 h-auto">
                <h1 className="text-gray-900 font-black text-5xl sm:text-7xl lg:text-8xl">
                  Websites designed & built faster with AI
                </h1>
              </div>
              <div className="lg:w-2/5 h-auto">
                <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  Use AI as your design ally, not as a replacement. Effortlessly
                  generate sitemaps and wireframes for marketing websites in
                  minutes.
                </p>
              </div>
            </div>
          </div>
        )}
        {shuffleState === 2 && (
          <div className="flex flex-col lg:flex-row items-center w-full h-full">
            <div className="flex-1">
              <Content />
            </div>
            <div className="flex-1 h-full flex items-center justify-center">
              <Image
                src={cardImage}
                alt="Relume Preview"
                className="w-auto h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
