// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("results");
  const [testDropdownOpen, setTestDropdownOpen] = useState(false);
  const [personalityTestDropdownOpen, setPersonalityTestDropdownOpen] =
    useState(false);

  const handleMouseEnter = (tab) => {
    setActive(tab);
    if (tab === "types") {
      setDropdownOpen(true);
    }
  };

  const handleTestMouseEnter = () => {
    setTestDropdownOpen(true);
  };

  const handlePersonalityTestMouseEnter = () => {
    setPersonalityTestDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
    setTestDropdownOpen(false);
    setPersonalityTestDropdownOpen(false);
  };

  const handleClick = (tab) => {
    setActive(tab);
    setDropdownOpen(false);
    setTestDropdownOpen(false);
    setPersonalityTestDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">16Personalities</div>
          </div>
          <div className="flex space-x-8">
            <button
              onClick={() => handleClick("results")}
              onMouseEnter={() => handleMouseEnter("results")}
              className={`${
                active === "results" ? "border-b-2 border-blue-500" : ""
              } text-gray-700 hover:text-blue-500`}
            >
              {t("navbar.yourResults")}
            </button>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("types")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleClick("types")}
                className={`${
                  active === "types" ? "border-b-2 border-blue-500" : ""
                } text-gray-700 hover:text-blue-500`}
              >
                {t("navbar.personalityTypes")}
              </button>
              {dropdownOpen && (
                <div className="w-[500px] absolute z-10 right-0 bg-white shadow-lg rounded-md p-4 shadow-gray-400">
                  <div className="py-2">
                    <div className="py-1 font-bold text-gray-800">
                      {t("personalityType.analysts")}
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      {t("personalityType.description")}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <Link to="/personality">
                        <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
                          {t("personalityType.logician")}
                        </button>
                      </Link>
                      <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
                        {t("personalityType.commander")}
                      </button>
                      <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
                        {t("personalityType.debater")}
                      </button>
                    </div>

                    <div className="py-1 font-bold text-gray-800 mt-4">
                      {t("personalityType.diplomats")}
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      {t("personalityType.description")}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
                        {t("personalityType.advocate")}
                      </button>
                      <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
                        {t("personalityType.mediator")}
                      </button>
                      <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
                        {t("personalityType.protagonist")}
                      </button>
                      <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
                        {t("personalityType.campaigner")}
                      </button>
                    </div>

                    <div className="py-1 font-bold text-gray-800 mt-4">
                      {t("personalityType.sentinels")}
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      {t("personalityType.description")}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
                        {t("personalityType.logistics")}
                      </button>
                      <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
                        {t("personalityType.defender")}
                      </button>
                      <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
                        {t("personalityType.executive")}
                      </button>
                      <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
                        {t("personalityType.consult")}
                      </button>
                    </div>

                    <div className="py-1 font-bold text-gray-800 mt-4">
                      {t("personalityType.explorers")}
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">
                      {t("personalityType.description")}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
                        {t("personalityType.virtuoso")}
                      </button>
                      <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
                        {t("personalityType.adventurer")}
                      </button>
                      <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
                        {t("personalityType.entrepreneur")}
                      </button>
                      <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
                        {t("personalityType.entertainer")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Personality Test Dropdown */}
            <div
              className="relative"
              onMouseEnter={handlePersonalityTestMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleClick("personalityTest")}
                className={`${
                  active === "personalityTest"
                    ? "border-b-2 border-blue-500"
                    : ""
                } text-gray-700 hover:text-blue-500`}
              >
                Personality Test
              </button>
              {personalityTestDropdownOpen && (
                <div className="w-64 absolute z-10 right-0  bg-white shadow-lg rounded-md p-4 shadow-gray-400">
                  <div className="py-2">
                    <Link to="/EnneagramPersonalityTest">
                      <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                        Enneagram Personality Test
                      </button>
                    </Link>
                    <Link to='/MBTIPersonalityTest'>
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
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Emotional Intelligence Test
                    </button>
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      Career Aptitude Test
                    </button>
                    <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
                      7 Love Styles Test
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="ml-4"
            >
              <option value="en">{t("navbar.language")} - English</option>
              <option value="es">{t("navbar.language")} - Español</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
