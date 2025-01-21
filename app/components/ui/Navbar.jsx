"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import ProductLinks from "./Links/ProductLinks";
import CommunityLinks from "./Links/CommunityLinks";
import News from "./News";
import NavLinks from "./Links/NavLinks";
import AuthButtons from "./AuthButtons";
import burgerMenuIcon from "../../assets/burgerMenuIcon.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    product: false,
    community: false,
  });
  const toggleDropdown = (type) => {
    setDropdown((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <>
    //   {/* <header className="fixed z-10 w-full"> */}
    //   <header
    //     className={`fixed top-0 left-0 w-full z-50 ${
    //       isScrolled ? "bg-gray-200" : "bg-transparent"
    //     } transition duration-300 `}
    //   >
    //     <div className="relative lg:hidden">
    //       <button
    //         className="bg-[url] bg-cover bg-center bg-no-repeat px-2 py-2 text-center"
    //         onClick={handleMenuToggle}
    //         style={{ backgroundImage: `url(${burgerMenuIcon})` }}
    //       >
    //         <span
    //           className={`bg-gray-800 h-1 w-6 block ${
    //             isOpen ? "rotate-45 translate-y-1.5" : ""
    //           }`}
    //         ></span>
    //         <span
    //           className={`bg-gray-800 h-1 w-6 block my-1 ${
    //             isOpen ? "opacity-0" : ""
    //           }`}
    //         ></span>
    //         <span
    //           className={`bg-gray-800 h-1 w-6 block ${
    //             isOpen ? "-rotate-45 -translate-y-1.5" : ""
    //           }`}
    //         ></span>
    //       </button>
    //       {isOpen && (
    //         <div className="absolute top-12 w-full px-2 z-10">
    //           <div className="px-6 py-4 bg-gray-200 lg:hidden rounded-xl">
    //             <button
    //               onClick={() => toggleDropdown("product")}
    //               className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
    //             >
    //               Products
    //               <i
    //                 className={`fas ml-2 ${
    //                   dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
    //                 }`}
    //               ></i>
    //             </button>
    //             {dropdown.product && (
    //               <div className="pl-4 py-2">
    //                 <ProductLinks />
    //                 <News />
    //               </div>
    //             )}
    //             <button
    //               onClick={() => toggleDropdown("community")}
    //               className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
    //             >
    //               Community
    //               <i
    //                 className={`fas ml-2 ${
    //                   dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
    //                 }`}
    //               ></i>
    //             </button>
    //             {dropdown.community && (
    //               <div className="pl-4 py-2">
    //                 <CommunityLinks />
    //               </div>
    //             )}
    //             <NavLinks />
    //             <div className="flex flex-col gap-4 mt-4">
    //               <AuthButtons />
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //     <div
    //       className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 columns-4"
    //       id="mobile-menu-2"
    //     >
    //       <div className="container mx-auto flex items-center justify-between px-6 py-4">
    //         <div className="flex items-center gap-2">
    //           <Link href="/">
    //             <img src="/logo.png" alt="Logo" width={40} height={40} />
    //           </Link>
    //           <span className="text-lg font-semibold text-gray-800 cursor-pointer">
    //             Relume
    //           </span>
    //         </div>
    //         <div className="hidden lg:flex items-center gap-8">
    //           <div
    //             className="relative group"
    //             onMouseEnter={() => toggleDropdown("product")}
    //             onMouseLeave={() => toggleDropdown("product")}
    //           >
    //             <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
    //               Products
    //               <i
    //                 className={`ml-2 fas ${
    //                   dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
    //                 }`}
    //               ></i>
    //             </button>
    //             {dropdown.product && (
    //               <div className="absolute left-0 mt-2 w-[50rem] bg-white border border-gray-200 rounded-md shadow-lg z-10 p-4">
    //                 <div className="flex space-x-4">
    //                   <div className="w-1/2 border-r border-gray-200 pr-4">
    //                     <ProductLinks />
    //                   </div>
    //                   <News />
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //           <div
    //             className="relative group"
    //             onMouseEnter={() => toggleDropdown("community")}
    //             onMouseLeave={() => toggleDropdown("community")}
    //           >
    //             <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
    //               Community
    //               <i
    //                 className={`ml-2 fas ${
    //                   dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
    //                 }`}
    //               ></i>
    //             </button>
    //             {dropdown.community && (
    //               <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-2">
    //                 <CommunityLinks />
    //               </div>
    //             )}
    //           </div>
    //           <NavLinks />
    //         </div>
    //         <div className="hidden lg:flex items-center gap-4">
    //           <AuthButtons />
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    // </>
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-gray-200" : "bg-transparent"
      } transition duration-300`}
    >
      <div className="relative lg:hidden">
        {/* Burger menu button */}
        <button
          className="bg-[url] bg-cover bg-center bg-no-repeat px-2 py-2 text-center"
          onClick={handleMenuToggle}
          style={{ backgroundImage: `url(${burgerMenuIcon})` }}
        >
          <span
            className={`bg-gray-800 h-1 w-6 block ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`bg-gray-800 h-1 w-6 block my-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-gray-800 h-1 w-6 block ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-12 w-full px-2 z-10">
            <div className="px-6 py-4 bg-gray-200 lg:hidden rounded-xl">
              <button
                onClick={() => toggleDropdown("product")}
                className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Products
                <i
                  className={`fas ml-2 ${
                    dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>
              {dropdown.product && (
                <div className="pl-4 py-2">
                  <ProductLinks />
                  <News />
                </div>
              )}
              <button
                onClick={() => toggleDropdown("community")}
                className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Community
                <i
                  className={`fas ml-2 ${
                    dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>
              {dropdown.community && (
                <div className="pl-4 py-2">
                  <CommunityLinks />
                </div>
              )}
              <NavLinks />
              <div className="flex flex-col gap-4 mt-4">
                <AuthButtons />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 columns-4"
        id="mobile-menu-2"
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img src="/logo.png" alt="Logo" width={40} height={40} />
            </Link>
            {/* Conditional rendering for the "Relume" span */}
            {!isScrolled && (
              <span className="text-lg font-semibold text-gray-800 cursor-pointer">
                Relume
              </span>
            )}
          </div>
          {/* Middle links */}
          {!isScrolled && (
            <div className="hidden lg:flex items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => toggleDropdown("product")}
                onMouseLeave={() => toggleDropdown("product")}
              >
                <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
                  Products
                  <i
                    className={`ml-2 fas ${
                      dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </button>
                {dropdown.product && (
                  <div className="absolute left-0 mt-2 w-[50rem] bg-white border border-gray-200 rounded-md shadow-lg z-10 p-4">
                    <div className="flex space-x-4">
                      <div className="w-1/2 border-r border-gray-200 pr-4">
                        <ProductLinks />
                      </div>
                      <News />
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative group"
                onMouseEnter={() => toggleDropdown("community")}
                onMouseLeave={() => toggleDropdown("community")}
              >
                <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
                  Community
                  <i
                    className={`ml-2 fas ${
                      dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </button>
                {dropdown.community && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-2">
                    <CommunityLinks />
                  </div>
                )}
              </div>
              <NavLinks />
            </div>
          )}
          <div className="hidden lg:flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// <nav className="bg-gray-100">
//   <div className="container mx-auto flex items-center justify-between px-6 py-4">
//     <div className="flex items-center gap-2">
//       <Link href="/">
//         <img src="/logo.png" alt="Logo" width={40} height={40} />
//       </Link>
//       <span className="text-lg font-semibold text-gray-800 cursor-pointer">
//         Relume
//       </span>
//     </div>
//     <div className="hidden lg:flex items-center gap-8">
//       <div
//         className="relative group"
//         onMouseEnter={() => toggleDropdown("product")}
//         onMouseLeave={() => toggleDropdown("product")}
//       >
//         <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
//           Products
//           <i
//             className={`ml-2 fas ${
//               dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
//             }`}
//           ></i>
//         </button>
//         {dropdown.product && (
//           <div className="absolute left-0 mt-2 w-[50rem] bg-white border border-gray-200 rounded-md shadow-lg z-10 p-4">
//             <div className="flex space-x-4">
//               <div className="w-1/2 border-r border-gray-200 pr-4">
//                 <ProductLinks />
//               </div>
//               <News />
//             </div>
//           </div>
//         )}
//       </div>
//       <div
//         className="relative group"
//         onMouseEnter={() => toggleDropdown("community")}
//         onMouseLeave={() => toggleDropdown("community")}
//       >
//         <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
//           Community
//           <i
//             className={`ml-2 fas ${
//               dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
//             }`}
//           ></i>
//         </button>
//         {dropdown.community && (
//           <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 p-2">
//             <CommunityLinks />
//           </div>
//         )}
//       </div>
//       <NavLinks />
//     </div>
//     <div className="hidden lg:flex items-center gap-4">
//       <AuthButtons />
//     </div>
//     <button
//       className="text-black lg:hidden"
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//     >
//       <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
//     </button>
//   </div>
//   {isMenuOpen && (
//     <div className="px-6 py-4 bg-gray-100 lg:hidden">
//       <button
//         onClick={() => toggleDropdown("product")}
//         className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
//       >
//         Products
//         <i
//           className={`fas ml-2 ${
//             dropdown.product ? "fa-chevron-up" : "fa-chevron-down"
//           }`}
//         ></i>
//       </button>
//       {dropdown.product && (
//         <div className="pl-4 py-2">
//           <ProductLinks />
//           <News />
//         </div>
//       )}
//       <button
//         onClick={() => toggleDropdown("community")}
//         className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
//       >
//         Community
//         <i
//           className={`fas ml-2 ${
//             dropdown.community ? "fa-chevron-up" : "fa-chevron-down"
//           }`}
//         ></i>
//       </button>
//       {dropdown.community && (
//         <div className="pl-4 py-2">
//           <CommunityLinks />
//         </div>
//       )}
//       <NavLinks />
//       <div className="flex flex-col gap-4 mt-4">
//         <AuthButtons />
//       </div>
//     </div>
//   )}
// </nav>
// "use client";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";

// import ProductLinks from "./ProductLinks";
// import CommunityLinks from "./CommunityLinks";
// import News from "./News";
// import NavLinks from "./NavLinks";

// const Navbar = () => {
//   const [isCommunityOpen, setIsCommunityOpen] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu visibility
//   const [isSmallScreenProductOpen, setIsSmallScreenProductOpen] =
//     useState(false); // Product dropdown for small screens
//   const [isSmallScreenCommunityOpen, setIsSmallScreenCommunityOpen] =
//     useState(false); // Community dropdown for small screens

//   // Function to toggle the menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <nav className="bg-gray-100">
//       <div className="container mx-auto flex items-center justify-between px-6 py-2">
//         <div className="flex items-center gap-2">
//           <Link href="/">
//             <img src="/logo.png" alt="Logo" width={40} height={40} />
//           </Link>
//           <span className="text-lg font-semibold text-gray-800 cursor-pointer">
//             Relume
//           </span>
//         </div>
//         {/* Desktop Navigation */}
//         <div className="xs:hidden sm:hidden md:hidden lg:flex  items-center lg:gap-0 xl:gap-6">
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsProductOpen(true)}
//             onMouseLeave={() => setIsProductOpen(false)}
//           >
//             <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
//               Products
//               <i
//                 className={`fas ml-2 ${
//                   isProductOpen ? "fa-chevron-up" : "fa-chevron-down"
//                 }`}
//               ></i>
//             </button>
//             <div
//               className={`absolute left-0 mt-2 w-[50rem] bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 p-4 ${
//                 isProductOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <div className="flex space-x-4">
//                 <div className="w-1/2 border-r border-gray-200 pr-4">
//                   <ProductLinks />
//                 </div>
//                 <News />
//               </div>
//             </div>
//           </div>
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsCommunityOpen(true)}
//             onMouseLeave={() => setIsCommunityOpen(false)}
//           >
//             <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
//               Community
//               <i
//                 className={`fas ml-2 ${
//                   isCommunityOpen ? "fa-chevron-up" : "fa-chevron-down"
//                 }`}
//               ></i>
//             </button>
//             {/* Dropdown for Community */}
//             <div
//               className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 p-2 ${
//                 isCommunityOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <CommunityLinks />
//             </div>
//           </div>
//           <NavLinks />
//         </div>
//         <div className="xs:hidden sm:hidden md:hidden lg:flex items-center gap-4">
//           <Link
//             href="/app/login"
//             className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
//           >
//             Log in
//           </Link>
//           <Link href="/app/signup">
//             <button className="bg-black text-white px-4 py-2 rounded-md font-medium flex items-center">
//               Start for free
//             </button>
//           </Link>
//         </div>
//         {/* Mobile Navigation Toggle */}
//         <button
//           className="text-black font-medium px-4 py-2 rounded-md lg:hidden"
//           onClick={toggleMenu}
//         >
//           <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="px-6 py-4 bg-purple-50">
//           <button
//             onClick={() =>
//               setIsSmallScreenProductOpen(!isSmallScreenProductOpen)
//             }
//             className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
//           >
//             Products
//             <i
//               className={`fas ml-2 ${
//                 isSmallScreenProductOpen ? "fa-chevron-up" : "fa-chevron-down"
//               }`}
//             ></i>
//           </button>
//           {isSmallScreenProductOpen && <News />}
//           <button
//             onClick={() =>
//               setIsSmallScreenCommunityOpen(!isSmallScreenCommunityOpen)
//             }
//             className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
//           >
//             Community
//             <i
//               className={`fas ml-2 ${
//                 isSmallScreenCommunityOpen ? "fa-chevron-up" : "fa-chevron-down"
//               }`}
//             ></i>
//           </button>
//           {isSmallScreenCommunityOpen && (
//             <div className="pl-4 py-2">
//               <CommunityLinks />
//             </div>
//           )}
//           <NavLinks />
//           <div className="flex gap-4">
//             <Link
//               href="/app/login"
//               className="flex-grow text-center font-medium flex items-center justify-center text-black px-4 py-2 rounded-md border border-black"
//             >
//               Sign in
//             </Link>
//             <Link
//               href="/app/login"
//               className="flex-grow text-center font-medium flex items-center justify-center px-4 py-2 rounded-md border bg-black text-white"
//             >
//               Start for free
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
