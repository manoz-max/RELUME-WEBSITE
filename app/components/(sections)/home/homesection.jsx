"use client";
import Image from "next/image";
import "../../../globals.css";
import cardImage from "../../../assets/images/card.png";
import { useState } from "react";
import ShuffleButton from "../../shufflebutton";

const HomeSection = () => {
  const [shuffleState, setShuffleState] = useState(0);

  const handleShuffle = () => {
    setShuffleState((prevState) => (prevState === 2 ? 0 : prevState + 1));
  };

  const ImageComponent = ({ additionalClasses = "", height = 180 }) => (
    <Image
      src={cardImage}
      alt="Relume Preview"
      height={height}
      className={`w-full md:max-w-[200px] lg:max-w-[220px] lg:w-72 lg:h-32 ${additionalClasses}`}
      style={{
        aspectRatio: "3/2",
      }}
    />
  );

  const LeftSideImages = () => (
    <div className="flex flex-col gap-4 sm:gap-6 transition-transform duration-300 lg:group-hover:translate-x-5 items-center lg:items-start">
      <ImageComponent additionalClasses="ml-7 md:aspect-square lg:aspect-auto" />
      <ImageComponent additionalClasses="md:aspect-square lg:aspect-auto" />
      <ImageComponent additionalClasses="ml-7 md:aspect-square lg:aspect-auto" />
    </div>
  );

  const RightSideImages = () => (
    <div className="flex flex-col gap-4 sm:gap-6 transition-transform duration-300 lg:group-hover:-translate-x-5 lg:gap-4 items-center">
      <ImageComponent additionalClasses="md:aspect-square lg:aspect-auto" />
      <ImageComponent additionalClasses="ml-8 md:aspect-square lg:aspect-auto" />
      <ImageComponent additionalClasses="md:aspect-square lg:aspect-auto" />
    </div>
  );

  const Content = ({ additionalClass = "" }) => (
    <div className="h-full flex">
      <div
        className={`flex flex-col justify-center items-center text-center h-full ${additionalClass}`}
      >
        <div className="space-y-6 sm:space-y-8">
          <h1 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-normal text-black">
            Websites designed & built faster with AI
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl mt-4 font-light leading-relaxed">
            Use AI as your design ally, not as a replacement. Effortlessly
            generate sitemaps and wireframes for marketing websites in minutes.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col justify-evenly bg-gray-100 w-full group mt-8 lg:h-[500px] py-8 lg:py-0">
      <div className="flex flex-col items-center gap-8">
        <ShuffleButton onClick={handleShuffle} />
        {shuffleState === 0 && (
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-full gap-4 px-4">
            <LeftSideImages />
            <Content />
            <RightSideImages />
          </div>
        )}
        {shuffleState === 1 && (
          <div className="flex flex-col w-full px-4 gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-auto sm:h-[150px] w-full">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="relative w-full h-full">
                  <Image
                    src={cardImage}
                    alt="Relume Preview"
                    className="w-full h-full object-cover md:aspect-square lg:aspect-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-10 gap-6 lg:gap-12">
              <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Websites designed & built faster with AI
              </h1>
              <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl">
                Use AI as your design ally, not as a replacement. Effortlessly
                generate sitemaps and wireframes for marketing websites in
                minutes.
              </p>
            </div>
          </div>
        )}
        {shuffleState === 2 && (
          <div className="flex flex-col lg:flex-row w-full h-full px-4 py-4 gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col justify-center lg:justify-between h-full">
              <Content />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={cardImage}
                alt="Relume Preview"
                className="w-full sm:max-w-[180px] lg:max-w-[200px] object-cover rounded-md h-auto md:aspect-square lg:aspect-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSection;
