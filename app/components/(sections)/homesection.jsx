import Image from "next/image";
import cardImage from "../../assets/images/card.png";

const HomeSection = () => {
  return (
    <section className="flex flex-col justify-evenly bg-gray-100 w-full px-3 group pt-6 h-full">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-full mx-auto gap-8">
        <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:translate-x-5 lg:gap-8 items-center lg:items-start">
          <Image
            src={cardImage}
            alt="Relume Preview"
            height={180}
            className="ml-7 w-full sm:w-3/4 md:w-full lg:w-72"
          />
          <Image
            src={cardImage}
            alt="Relume Preview"
            height={180}
            className="w-full sm:w-3/4 md:w-full lg:w-72"
          />
          <Image
            src={cardImage}
            alt="Relume Preview"
            width={280}
            height={180}
            className="ml-7 w-full sm:w-3/4 md:w-full lg:w-72 "
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center max-w-3xl px-4">
          {/* <h1 className="leading-snug text-gray-900 font-black text-7xl"> */}
          <h1 className="text-gray-900 font-extrabold text-3xl sm:text-4xl lg:text-7xl leading-snug">
            Websites designed & built faster with AI
          </h1>
          <p className=" text-black text-xl mt-6 sm:text-lg lg:text-xl">
            Use AI as your design ally, not as a replacement. Effortlessly
            generate sitemaps and wireframes for marketing websites in minutes.
          </p>
        </div>
        <div className="flex flex-col gap-4 transition-transform duration-300 group-hover:-translate-x-5  lg:gap-8 items-center">
          <Image
            src={cardImage}
            alt="Relume Preview"
            height={180}
            className="w-full sm:w-3/4 md:w-full lg:w-72"
          />
          <Image
            src={cardImage}
            alt="Relume Preview"
            height={180}
            className="ml-7 w-full sm:w-3/4 md:w-full lg:w-72"
          />
          <Image
            src={cardImage}
            alt="Relume Preview"
            height={180}
            className="w-full sm:w-3/4 md:w-full lg:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
//           <Image
//             src={cardImage}
//             alt="Relume Preview"
//             height={180}
//           />
//           <Image
//             src={cardImage}
//             alt="Relume Preview"
//             className="w-full sm:w-3/4 lg:w-72"
//             height={180}
//           />
//           <Image
//             src={cardImage}
//             alt="Relume Preview"
//             className="w-full sm:w-3/4 lg:w-72"
//             height={180}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSection;
