import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu after clicking
    }
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("click", handleClickOutsideMenu);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-black  bg-opacity-70 backdrop-blur-lg">
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between p-4"
        ref={menuRef}>
        <a href="/" className="flex items-center px-6">
          <img
            src="/logo.png"
            className="h-10"
            alt="InvoiceChain Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Secured Cargo
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-customRed focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <button
                onClick={() => scrollToSection("first-section")}
                className="w-full uppercase py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-customRed hover:text-customRed md:p-0">
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("second-section")}
                className="w-full uppercase py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-customRed hover:text-customRed md:p-0">
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("third-section")}
                className="w-full uppercase py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-customRed hover:text-customRed md:p-0">
                Tokenomics
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("fourth-section")}
                className="w-full uppercase py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-customRed hover:text-customRed md:p-0">
                Use Cases
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;