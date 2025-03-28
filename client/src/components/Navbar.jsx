

import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  // Refs to track dropdown elements
  const personalityTestRef = useRef(null);
  const personalityTypesRef = useRef(null);
  const userMenuRef = useRef(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (personalityTestRef.current && !personalityTestRef.current.contains(event.target)) &&
        (personalityTypesRef.current && !personalityTypesRef.current.contains(event.target)) &&
        (userMenuRef.current && !userMenuRef.current.contains(event.target))
      ) {
        setDropdown(null); // Close dropdown
        setUserMenu(false); // Close user menu
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-2 py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="flex md:items-center">
          <img src={logo} alt="Logo" className="h-16 w-56" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <div className="relative" ref={personalityTestRef}>
            <button
              className="text-gray-700 font-semibold flex items-center space-x-1"
              onClick={() => toggleDropdown("personalityTest")}
            >
              <span>Personality Test</span>
              {dropdown === "personalityTest" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdown === "personalityTest" && (
              <div className="w-64 absolute z-10 right-0 bg-white shadow-lg rounded-md p-4 shadow-gray-400">
                <div className="py-2">
                  <Link to="/EnneagramPersonalityTest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Enneagram Personality Test
                    </button>
                  </Link>
                  <Link to="/MBTIPersonalityTest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      MBTI Personality Test
                    </button>
                  </Link>
                  <Link to="/BIGFIVEPersonalityTest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Big Five Personality Test
                    </button>
                  </Link>
                  <Link to="/DISCPersonalityTest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      DISC Personality Test
                    </button>
                  </Link>
                  <Link to="/EmotionalPersonalityTest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Emotional Intelligence Test
                    </button>
                  </Link>
                  <Link to="/CareerAptitudePersonalitytest">
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Career Aptitude Test
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={personalityTypesRef}>
            <button
              className="text-gray-700 font-semibold flex items-center space-x-1"
              onClick={() => toggleDropdown("personalityTypes")}
            >
              <span>Personality Types</span>
              {dropdown === "personalityTypes" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdown === "personalityTypes" && (
              <div className="w-[600px] absolute z-10 right-0 bg-white shadow-lg rounded-md p-4 shadow-gray-400">
                <div className="py-2">
                  <div className="py-1 font-bold text-gray-800">Analysts</div>
                  <div className="grid grid-cols-4 gap-2">
                    <Link to="/intj-blogs">
                    <button className="bg-blue-500 text-white text-[14px] py-2 rounded-md hover:bg-blue-600 w-full font-semibold cursor-pointer">
                      INTJ – Architect
                    </button>
                    </Link>
                    <Link to="/intp-blogs">
                      <button className="bg-blue-500 text-white text-[14px] py-2 rounded-md hover:bg-blue-600 w-full font-semibold cursor-pointer">
                        INTP – Logician
                      </button>
                    </Link>
                    <button className="bg-blue-500 text-white text-[14px] py-2 rounded-md hover:bg-blue-600 w-full font-semibold cursor-pointer">
                      ENTJ – Commander
                    </button>
                    <button className="bg-blue-500 text-white text-[14px] py-2 rounded-md hover:bg-blue-600 w-full font-semibold cursor-pointer">
                      ENTP – Debater
                    </button>
                  </div>

                  <div className="py-1 font-bold text-gray-800 mt-4">Diplomats</div>
                  <div className="grid grid-cols-4 gap-2">
                  <Link to='/infj-blogs'>
                    <button className="bg-green-500 text-white text-[14px] py-2 rounded-md hover:bg-green-600 w-full font-semibold cursor-pointer">
                      INFJ – Advocate
                    </button>
                    </Link>
                    <button className="bg-green-500 text-white text-[14px] py-2 rounded-md hover:bg-green-600 w-full font-semibold cursor-pointer">
                      INFP – Mediator
                    </button>
                    <button className="bg-green-500 text-white text-[14px] py-2 rounded-md hover:bg-green-600 w-full font-semibold cursor-pointer">
                      ENFJ – Protagonist
                    </button>
                   <Link to='/enfp-blogs'>
                    <button className="bg-green-500 text-white text-[14px] py-2 rounded-md hover:bg-green-600 w-full font-semibold cursor-pointer">
                      ENFP – Campaigner
                    </button>
                    </Link>
                  </div>

                  <div className="py-1 font-bold text-gray-800 mt-4">Sentinels</div>
                  <div className="grid grid-cols-4 gap-2">
                  <Link to='/istj-blogs'>
                    <button className="bg-yellow-500 text-white text-[14px] py-2 rounded-md hover:bg-yellow-600 w-full font-semibold cursor-pointer">
                      ISTJ – Logistician
                    </button>
                    </Link>
                    <button className="bg-yellow-500 text-white text-[14px] py-2 rounded-md hover:bg-yellow-600 w-full font-semibold cursor-pointer">
                      ISFJ – Defender
                    </button>
                    <button className="bg-yellow-500 text-white text-[14px] py-2 rounded-md hover:bg-yellow-600 w-full font-semibold cursor-pointer">
                      ESTJ – Executive
                    </button>
                    <button className="bg-yellow-500 text-white text-[14px] py-2 rounded-md hover:bg-yellow-600 w-full font-semibold cursor-pointer">
                      ESFJ – Consul
                    </button>
                  </div>

                  <div className="py-1 font-bold text-gray-800 mt-4">Explorers</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="bg-purple-500 text-white text-[14px] py-2 rounded-md hover:bg-purple-600 w-full font-semibold cursor-pointer">
                      ISTP – Virtuoso
                    </button>
                    <button className="bg-purple-500 text-white text-[14px] py-2 rounded-md hover:bg-purple-600 w-full font-semibold cursor-pointer">
                      ISFP – Adventurer
                    </button>
                    <button className="bg-purple-500 text-white text-[14px] py-2 rounded-md hover:bg-purple-600 w-full font-semibold cursor-pointer">
                      ESTP – Entrepreneur
                    </button>
                    <button className="bg-purple-500 text-white text-[14px] py-2 rounded-md hover:bg-purple-600 w-full font-semibold cursor-pointer">
                      ESFP – Entertainer
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 font-semibold">
            Enneagram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Login Section with Dropdown */}
        <div className="relative" ref={userMenuRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setUserMenu(!userMenu)}
          >
            <span className="text-gray-700 hidden md:inline">Log in</span>
            <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
          </div>
          {userMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
              <p className="block px-4 py-2 text-gray-700">user@example.com</p>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Sign Out
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="fixed top-18 left-0 w-full h-auto bg-gray-100 shadow-md md:hidden flex flex-col items-center p-6 overflow-auto z-40">
          <button
            className="text-gray-700 font-semibold w-full text-left py-2 flex items-center space-x-1"
            onClick={() => toggleDropdown("personalityTest")}
          >
            <span>Personality Test</span>
            {dropdown === "personalityTest" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTest" && (
            <div className="w-full bg-white shadow-lg rounded-md p-2 shadow-gray-400">
              <div className="py-2">
                <Link to="/EnneagramPersonalityTest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    Enneagram Personality Test
                  </button>
                </Link>
                <Link to="/MBTIPersonalityTest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    MBTI Personality Test
                  </button>
                </Link>
                <Link to="/BIGFIVEPersonalityTest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    Big Five Personality Test
                  </button>
                </Link>
                <Link to="/DISCPersonalityTest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    DISC Personality Test
                  </button>
                </Link>
                <Link to="/EmotionalPersonalityTest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    Emotional Intelligence Test
                  </button>
                </Link>
                <Link to="/CareerAptitudePersonalitytest">
                  <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                    Career Aptitude Test
                  </button>
                </Link>
              </div>
            </div>
          )}

          <button
            className="text-gray-700 font-semibold w-full text-left py-2 mt-2 flex items-center space-x-1"
            onClick={() => toggleDropdown("personalityTypes")}
          >
            <span>Personality Types</span>
            {dropdown === "personalityTypes" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTypes" && (
            <div className="w-full bg-white shadow-lg rounded-md p-2 shadow-gray-400">
              <div className="py-2">
                <div className="py-1 font-bold text-gray-800">Analysts</div>
                <div className="grid grid-cols-4 gap-2">
                  <Link to="/intj-blogs">
                  <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full text-[10px] font-semibold px-1 py-2">
                    INTJ – Architect
                  </button>
                  </Link>
                  <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full text-[10px] font-semibold px-1 py-2">
                    INTP – Logician
                  </button>
                  <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full text-[10px] font-semibold px-1 py-2">
                    ENTJ – Commander
                  </button>
                  <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full text-[10px] font-semibold px-1 py-2">
                    ENTP – Debater
                  </button>
                </div>

                <div className="py-1 font-bold text-gray-800 mt-4">Diplomats</div>
                <div className="grid grid-cols-4 gap-2">
                  <Link to='/infj-blogs'>
                  <button className="bg-green-500 text-white rounded-md hover:bg-green-600 w-full text-[10px] font-semibold px-1 py-2">
                    INFJ – Advocate
                  </button>
                  </Link>
                  <button className="bg-green-500 text-white rounded-md hover:bg-green-600 w-full text-[10px] font-semibold px-1 py-2">
                    INFP – Mediator
                  </button>
                  <button className="bg-green-500 text-white rounded-md hover:bg-green-600 w-full text-[10px] font-semibold px-1 py-2">
                    ENFJ – Protagonist
                  </button>
                  <Link to='/enfp-blogs'>
                  <button className="bg-green-500 text-white rounded-md hover:bg-green-600 w-full text-[10px] font-semibold px-1 py-2">
                    ENFP – Campaigner
                  </button>
                  </Link>
                </div>

                <div className="py-1 font-bold text-gray-800 mt-4">Sentinels</div>
                <div className="grid grid-cols-4 gap-2">
                  <Link to='/istj-blogs'>
                  <button className="bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 w-full font-semibold text-[10px]">
                    ISTJ – Logistician
                  </button>
                  </Link>
                  <button className="bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 w-full font-semibold text-[10px]">
                    ISFJ – Defender
                  </button>
                  <button className="bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 w-full font-semibold text-[10px]">
                    ESTJ – Executive
                  </button>
                  <button className="bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 w-full font-semibold text-[10px]">
                    ESFJ – Consul
                  </button>
                </div>

                <div className="py-1 font-bold text-gray-800 mt-4">Explorers</div>
                <div className="grid grid-cols-4 gap-2">
                  <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full text-[10px] font-semibold px-1">
                    ISTP – Virtuoso
                  </button>
                  <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full text-[10px] font-semibold px-1">
                    ISFP – Adventurer
                  </button>
                  <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full text-[10px] font-semibold px-1">
                    ESTP – Entrepreneur
                  </button>
                  <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full text-[10px] font-semibold px-1">
                    ESFP – Entertainer
                  </button>
                </div>
              </div>
            </div>
          )}

          <a href="#" className="text-gray-700 font-semibold mt-4">
            Enneagram
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
