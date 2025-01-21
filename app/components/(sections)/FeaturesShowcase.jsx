// import FeatureSection from "./FeatureSection";

// const FeaturesShowcase = () => {
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center gap-4 justify-center">
//           <div className="w-11/12 md:w-8/12 xl:w-1/2 ">
//             <form className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 rounded-lg p-1.5 transition-all duration-[600ms] ease-[cubic-bezier(.68,-.55,.265,1.55)]">
//               <div className="w-full h-full flex items-center bg-white rounded-lg p-2">
//                 <input
//                   type="text"
//                   placeholder="company for product"
//                   className="w-full py-3 px-5 rounded-lg text-lg outline-none placeholder-black h-full font-medium md:pl-2"
//                 />
//                 <button
//                   className="w-28 h-full flex justify-center items-center bg-purple-500 text-white rounded-2xl font-medium shadow-md
//                 hover:from-purple-600 hover:to-purple-800 transition-all duration-200 px-4 py-2"
//                 >
//                   Generate
//                 </button>
//               </div>
//             </form>
//             <div className="mt-4 flex justify-end">
//               <p className="text-gray-600">
//                 Take it for a spin with an{" "}
//                 <a href="#" className="text-purple-500 underline">
//                   example
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <FeatureSection />
//       </div>
//     </section>
//   );
// };

// export default FeaturesShowcase;
import FeatureSection from "./FeatureSection";

const FeaturesShowcase = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 justify-center">
          <div className="w-11/12 md:w-8/12 xl:w-1/2">
            <form className="bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 rounded-lg p-1.5 transition-all duration-[600ms] ease-[cubic-bezier(.68,-.55,.265,1.55)]">
              <div className="w-full h-full flex items-center bg-white rounded-lg p-2">
                <input
                  type="text"
                  placeholder="company for product"
                  className="w-full py-3 px-5 rounded-lg text-lg outline-none placeholder-black h-full font-medium md:pl-2"
                />
                <button
                  className="w-28 h-full flex justify-center items-center bg-purple-500 text-white rounded-2xl font-medium shadow-md hover:from-purple-600 hover:to-purple-800 transition-all duration-200 px-4 py-2"
                >
                  Generate
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-end">
              <p className="text-gray-600">
                Take it for a spin with an{" "}
                <a href="#" className="text-purple-500 underline">
                  example
                </a>
              </p>
            </div>
          </div>
        </div>
        <FeatureSection />
      </div>
    </section>
  );
};

export default FeaturesShowcase;