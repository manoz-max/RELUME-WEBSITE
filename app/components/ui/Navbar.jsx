"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu visibility
  const [isSmallScreenProductOpen, setIsSmallScreenProductOpen] =
    useState(false); // Product dropdown for small screens
  const [isSmallScreenCommunityOpen, setIsSmallScreenCommunityOpen] =
    useState(false); // Community dropdown for small screens

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          <span className="text-lg font-semibold text-gray-800 cursor-pointer">
            Relume
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="xs:hidden sm:hidden md:hidden lg:flex  items-center lg:gap-0 xl:gap-6">
          <div
            className="relative group"
            onMouseEnter={() => setIsProductOpen(true)}
            onMouseLeave={() => setIsProductOpen(false)}
          >
            <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
              Products
              <i
                className={`fas ml-2 ${
                  isProductOpen ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
            {/* Dropdown for Products */}
            <div
              className={`absolute left-0 mt-2 w-[50rem] bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 p-4 ${
                isProductOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* Your Product Dropdown Content */}
              <div className="flex space-x-4">
                {/* Product List */}
                <div className="w-1/2 border-r border-gray-200 pr-4">
                  {/* Links */}
                  {/* Add Product links from your original code here */}
                  <Link
                    href=""
                    className="flex items-center text-black bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a6353fe69352be714507_Site%20Builder%20Icon%20(Smooth).svg"
                      alt="AI Site Builder Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        AI Site Builder
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        Create Sitemap & Wireframe in minutes
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5bb449e0bb467854101_Webflow%20Library%20Icon%20(Smooth).svg"
                      alt="WebFlow Library Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        WebFlow Library
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        1K+ Client-First Webflow Components
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5a9ac8d073ce51206c9_Figma%20Library%20Icon%20(Smooth).svg"
                      alt="Figma Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        Figma Library
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        1k+ Figma Components
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65f8e468c7cfd863aef27641_React%20Library%20Icon%20(Smooth).svg"
                      alt="React Library Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        React Library
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        1K+ React Components
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814f5b2226620fe43f4_Chrome%20Ext%20Icon%20(Smooth)No%20Gradient.svg"
                      alt="Chrom Extensions Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        Chrom Extensions
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        Boost your Productivity in Webflow
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b2981470cb1850c0f0855f_Relume%20Libraries%20Icon%20(Smooth)No%20Gradient.svg"
                      alt="Libraries Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">Libraries</span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        Create your own Webflow Library
                      </p>
                    </div>
                  </Link>
                  <Link
                    href=""
                    className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814eab2ab3c2b0c9501_Relume%20Ipsum%20Icon%20(Smooth)No%20Gradient.svg"
                      alt="Relume Icon"
                      className="w-8 h-8 mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">
                        Relume Icons
                      </span>
                      <p className="text-gray-600 mt-1 leading-tight text-xs">
                        Open source icons for Webflow & Figma
                      </p>
                    </div>
                  </Link>
                </div>
                {/* "What's New" Section */}
                <div className="w-full md:w-1/2 bg-gray-200 rounded-lg shadow-md p-4">
                  {/* What's New Content */}
                  {/* Add What's New Content from your original code here */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-black">
                      What's New
                    </span>
                    <Link href="/whats-new">
                      <span className="text-sm text-gray-500 hover:text-black">
                        View All
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col mb-6">
                    <img
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
                      alt="News Item 1"
                      className="rounded-md mb-2"
                    />
                    <p className="text-xs text-gray-500 mb-1">
                      December 2, 2024
                    </p>
                    <p className="text-sm font-medium text-black line-clamp-2">
                      Relume React Library Leaves Beta—Unlock Full Power with
                      v1.0.0
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <img
                      src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
                      alt="News Item 2"
                      className="rounded-md mb-2"
                    />
                    <p className="text-xs text-gray-500 mb-1">
                      November 5, 2024
                    </p>
                    <p className="text-sm font-medium text-black line-clamp-2">
                      Style Guide Builder Beta, Portfolio Sections, GPT Prompt
                      Builder & More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setIsCommunityOpen(true)}
            onMouseLeave={() => setIsCommunityOpen(false)}
          >
            <button className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md">
              Community
              <i
                className={`fas ml-2 ${
                  isCommunityOpen ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
            {/* Dropdown for Community */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 p-2 ${
                isCommunityOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* Add Community Dropdown Links */}
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Community Love
              </Link>
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Showcase
              </Link>
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Inspiration Feed
              </Link>
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Voting Board
              </Link>
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Slack
              </Link>
              <Link
                href="/"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Hire an Expert
              </Link>
              {/* Links from your original code */}
            </div>
          </div>
          <Link
            href="/pricing"
            className="text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Learn
          </Link>
          <Link
            href="/contact"
            className="text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Contact Sales
          </Link>
        </div>
        <div className="xs:hidden sm:hidden md:hidden lg:flex items-center gap-4">
          <Link
            href="/app/login"
            className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Log in
          </Link>
          <Link href="/app/signup">
            <button className="bg-black text-white px-4 py-2 rounded-md font-medium flex items-center">
              Start for free
            </button>
          </Link>
        </div>
        {/* Mobile Navigation Toggle */}
        <button
          className="text-black font-medium px-4 py-2 rounded-md lg:hidden"
          onClick={toggleMenu}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-6 py-4 bg-purple-50">
          <button
            onClick={() =>
              setIsSmallScreenProductOpen(!isSmallScreenProductOpen)
            }
            className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Products
            <i
              className={`fas ml-2 ${
                isSmallScreenProductOpen ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </button>
          {isSmallScreenProductOpen && (
            <div className="pl-4 py-2">
              <Link
                href=""
                className="flex items-center text-black bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a6353fe69352be714507_Site%20Builder%20Icon%20(Smooth).svg"
                  alt="AI Site Builder Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">AI Site Builder</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    Create Sitemap & Wireframe in minutes
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5bb449e0bb467854101_Webflow%20Library%20Icon%20(Smooth).svg"
                  alt="WebFlow Library Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">WebFlow Library</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    1K+ Client-First Webflow Components
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b1a5a9ac8d073ce51206c9_Figma%20Library%20Icon%20(Smooth).svg"
                  alt="Figma Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Figma Library</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    1k+ Figma Components
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65f8e468c7cfd863aef27641_React%20Library%20Icon%20(Smooth).svg"
                  alt="React Library Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">React Library</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    1K+ React Components
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814f5b2226620fe43f4_Chrome%20Ext%20Icon%20(Smooth)No%20Gradient.svg"
                  alt="Chrom Extensions Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">
                    Chrom Extensions
                  </span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    Boost your Productivity in Webflow
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b2981470cb1850c0f0855f_Relume%20Libraries%20Icon%20(Smooth)No%20Gradient.svg"
                  alt="Libraries Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Libraries</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    Create your own Webflow Library
                  </p>
                </div>
              </Link>
              <Link
                href=""
                className="flex items-center text-black hover:bg-gray-200 pl-2 py-2 rounded-md mb-2 transition-all duration-200"
              >
                <img
                  src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b29814eab2ab3c2b0c9501_Relume%20Ipsum%20Icon%20(Smooth)No%20Gradient.svg"
                  alt="Relume Icon"
                  className="w-8 h-8 mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">Relume Icons</span>
                  <p className="text-gray-600 mt-1 leading-tight text-xs">
                    Open source icons for Webflow & Figma
                  </p>
                </div>
              </Link>
              <div className="w-full md:w-1/2 bg-gray-200 rounded-lg shadow-md p-4">
                {/* What's New Content */}
                {/* Add What's New Content from your original code here */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-black">
                    What's New
                  </span>
                  <Link href="/whats-new">
                    <span className="text-sm text-gray-500 hover:text-black">
                      View All
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col mb-6">
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
                    alt="News Item 1"
                    className="rounded-md mb-2"
                  />
                  <p className="text-xs text-gray-500 mb-1">December 2, 2024</p>
                  <p className="text-sm font-medium text-black line-clamp-2">
                    Relume React Library Leaves Beta—Unlock Full Power with
                    v1.0.0
                  </p>
                </div>
                <div className="flex flex-col">
                  <img
                    src="https://cdn.prod.website-files.com/61789b489343c8242282a0ae/674e1fc262fdf7bd841aebca_December%20Component%20Day.png"
                    alt="News Item 2"
                    className="rounded-md mb-2"
                  />
                  <p className="text-xs text-gray-500 mb-1">November 5, 2024</p>
                  <p className="text-sm font-medium text-black line-clamp-2">
                    Style Guide Builder Beta, Portfolio Sections, GPT Prompt
                    Builder & More
                  </p>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() =>
              setIsSmallScreenCommunityOpen(!isSmallScreenCommunityOpen)
            }
            className="font-medium flex justify-between w-full text-black hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Community
            <i
              className={`fas ml-2 ${
                isSmallScreenCommunityOpen ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>
          </button>
          {isSmallScreenCommunityOpen && (
            <div className="pl-4 py-2">
              <Link
                href="/forums"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Community Love
              </Link>
              <Link
                href="/events"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Showcase
              </Link>
              <Link
                href="/blog"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Inspiration Feed
              </Link>
              <Link
                href="/voting-board"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Voting Board
              </Link>
              <Link
                href="/slack"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Slack
              </Link>
              <Link
                href="/hire-an-expert"
                className="font-medium flex items-center text-black hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                Hire an Expert
              </Link>
            </div>
          )}
          <Link
            href="/pricing"
            className="block text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="block text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Learn
          </Link>
          <Link
            href="/contact"
            className="block text-black font-medium hover:bg-gray-200 px-4 py-2 rounded-md"
          >
            Contact Sales
          </Link>
          <div className="flex gap-4">
            <Link
              href="/app/login"
              className="flex-grow text-center font-medium flex items-center justify-center text-black px-4 py-2 rounded-md border border-black"
            >
              Sign in
            </Link>
            <Link
              href="/app/login"
              className="flex-grow text-center font-medium flex items-center justify-center px-4 py-2 rounded-md border bg-black text-white"
            >
              Start for free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
