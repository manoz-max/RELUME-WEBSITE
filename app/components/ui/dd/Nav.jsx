"use client";
import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-blue-500 p-4 text-white">
      <div className="text-xl font-bold">MyWebsite</div>
      <button
        className="text-2xl md:hidden"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      >
        {menuOpen ? "✖" : "☰"}
      </button>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>

      {/* Bottom Modal for Small Screens */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-lg p-6 shadow-lg md:hidden">
          <ul className="space-y-4 text-center text-lg">
            <li>
              <a
                href="#home"
                className="text-blue-500 hover:underline"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-blue-500 hover:underline"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-blue-500 hover:underline"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-500 hover:underline"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;


// "use client";
// import React, { useState } from "react";
// import "./Nav.css";

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">MyWebsite</div>
//       <button className="burger-menu" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#services">Services</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;
