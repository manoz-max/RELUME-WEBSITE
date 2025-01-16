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
      className={`w-full sm:w-3/4 md:w-full lg:w-72 ${additionalClasses}`}
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
        className={`flex flex-col items-center justify-center text-center max-w-3xl px-4 ${additionalClass}`}
      >
        <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-snug">
          Websites designed & built faster with AI
        </h1>
        <p className=" text-black text-xl mt-6 sm:text-lg lg:text-xl">
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
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-full  gap-8">
            <LeftSideImages />
            <Content />
            <RightSideImages />
          </div>
        )}
        {shuffleState === 1 && (
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-wrap justify-center gap-2">
              {[...Array(4)].map((_, index) => (
                <ImageComponent key={index} />
              ))}
            </div>
            <div>
              <Content additionalClass="lg:flex-row" />
            </div>
          </div>
        )}
        {shuffleState === 2 && (
          <div className="flex flex-col lg:flex-row items-center w-full">
            <Content />
            <ImageComponent additionalClasses="lg:w-1/2" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
