// // src/components/Navbar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const Navbar = () => {
//   const { t, i18n } = useTranslation();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [active, setActive] = useState("results");
//   const [testDropdownOpen, setTestDropdownOpen] = useState(false);
//   const [personalityTestDropdownOpen, setPersonalityTestDropdownOpen] =
//     useState(false);

//   const handleMouseEnter = (tab) => {
//     setActive(tab);
//     if (tab === "types") {
//       setDropdownOpen(true);
//     }
//   };

//   const handleTestMouseEnter = () => {
//     setTestDropdownOpen(true);
//   };

//   const handlePersonalityTestMouseEnter = () => {
//     setPersonalityTestDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setDropdownOpen(false);
//     setTestDropdownOpen(false);
//     setPersonalityTestDropdownOpen(false);
//   };

//   const handleClick = (tab) => {
//     setActive(tab);
//     setDropdownOpen(false);
//     setTestDropdownOpen(false);
//     setPersonalityTestDropdownOpen(false);
//   };

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <nav className="bg-white shadow">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="text-2xl font-bold">16Personalities</div>
//           </div>
//           <div className="flex space-x-8">
//             <button
//               onClick={() => handleClick("results")}
//               onMouseEnter={() => handleMouseEnter("results")}
//               className={`${
//                 active === "results" ? "border-b-2 border-blue-500" : ""
//               } text-gray-700 hover:text-blue-500`}
//             >
//               {t("navbar.yourResults")}
//             </button>

//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("types")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 onClick={() => handleClick("types")}
//                 className={`${
//                   active === "types" ? "border-b-2 border-blue-500" : ""
//                 } text-gray-700 hover:text-blue-500`}
//               >
//                 {t("navbar.personalityTypes")}
//               </button>
//               {dropdownOpen && (
//                 <div className="w-[500px] absolute z-10 right-0 bg-white shadow-lg rounded-md p-4 shadow-gray-400">
//                   <div className="py-2">
//                     <div className="py-1 font-bold text-gray-800">
//                       {t("personalityType.analysts")}
//                     </div>
//                     <p className="text-sm text-gray-600 font-semibold mb-2">
//                       {t("personalityType.description")}
//                     </p>
//                     <div className="grid grid-cols-4 gap-2">
//                       <Link to="/personality">
//                         <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
//                           {t("personalityType.logician")}
//                         </button>
//                       </Link>
//                       <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
//                         {t("personalityType.commander")}
//                       </button>
//                       <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 w-full font-semibold">
//                         {t("personalityType.debater")}
//                       </button>
//                     </div>

//                     <div className="py-1 font-bold text-gray-800 mt-4">
//                       {t("personalityType.diplomats")}
//                     </div>
//                     <p className="text-sm text-gray-600 font-semibold mb-2">
//                       {t("personalityType.description")}
//                     </p>
//                     <div className="grid grid-cols-4 gap-2">
//                       <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
//                         {t("personalityType.advocate")}
//                       </button>
//                       <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
//                         {t("personalityType.mediator")}
//                       </button>
//                       <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
//                         {t("personalityType.protagonist")}
//                       </button>
//                       <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 w-full font-semibold">
//                         {t("personalityType.campaigner")}
//                       </button>
//                     </div>

//                     <div className="py-1 font-bold text-gray-800 mt-4">
//                       {t("personalityType.sentinels")}
//                     </div>
//                     <p className="text-sm text-gray-600 font-semibold mb-2">
//                       {t("personalityType.description")}
//                     </p>
//                     <div className="grid grid-cols-4 gap-2">
//                       <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
//                         {t("personalityType.logistics")}
//                       </button>
//                       <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
//                         {t("personalityType.defender")}
//                       </button>
//                       <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
//                         {t("personalityType.executive")}
//                       </button>
//                       <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 w-full font-semibold">
//                         {t("personalityType.consult")}
//                       </button>
//                     </div>

//                     <div className="py-1 font-bold text-gray-800 mt-4">
//                       {t("personalityType.explorers")}
//                     </div>
//                     <p className="text-sm text-gray-600 font-semibold mb-2">
//                       {t("personalityType.description")}
//                     </p>
//                     <div className="grid grid-cols-4 gap-2">
//                       <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
//                         {t("personalityType.virtuoso")}
//                       </button>
//                       <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
//                         {t("personalityType.adventurer")}
//                       </button>
//                       <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
//                         {t("personalityType.entrepreneur")}
//                       </button>
//                       <button className="bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 w-full">
//                         {t("personalityType.entertainer")}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Personality Test Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={handlePersonalityTestMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <button
//                 onClick={() => handleClick("personalityTest")}
//                 className={`${
//                   active === "personalityTest"
//                     ? "border-b-2 border-blue-500"
//                     : ""
//                 } text-gray-700 hover:text-blue-500`}
//               >
//                 Personality Test
//               </button>
//               {personalityTestDropdownOpen && (
//                 <div className="w-64 absolute z-10 right-0  bg-white shadow-lg rounded-md p-4 shadow-gray-400">
//                   <div className="py-2">
//                     <Link to="/EnneagramPersonalityTest">
//                       <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                         Enneagram Personality Test
//                       </button>
//                     </Link>
//                     <Link to='/MBTIPersonalityTest'>
//                     <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                      MBTI Personality Test
//                     </button>
//                     </Link>
//                     <Link to="/BIGFIVEPersonalityTest">
//                       <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                         Big Five Personality Test
//                       </button>
//                     </Link>
//                     <Link to="/DISCPersonalityTest">
//                       <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                         DISC Personality Test
//                       </button>
//                     </Link>
//                     <Link to='/EmotionalPersonalityTest'>
//                     <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                       Emotional Intelligence Test
//                     </button>
//                     </Link>
//                     <Link to="/CareerAptitudePersonalitytest">
//                     <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                       Career Aptitude Test
//                     </button>
//                     </Link>
//                     {/* <button className="block w-full text-left text-gray-700 hover:bg-gray-100 py-2">
//                       7 Love Styles Test
//                     </button> */}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Language Dropdown */}
//             <select
//               onChange={(e) => changeLanguage(e.target.value)}
//               className="ml-4"
//             >
//               <option value="en">{t("navbar.language")} - English</option>
//               <option value="es">{t("navbar.language")} - Español</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import blogImage from "../assets/blogsImg.jpg";

const testimonials = [
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇺🇸"
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇬🇧"
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇨🇦"
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇦🇺"
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇩🇪"
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇫🇷"
  }
];
const blogPosts = [
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage
  }
];

const Navbar = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdown, setDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const itemsPerSlide = 4;
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerSlide));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="ml-2 text-xl font-bold text-gray-700">PERSONALITY AFFAIRS</span>
      </div>
      
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <div className="relative">
          <button 
            className="text-gray-700 font-semibold flex items-center space-x-1"
            onClick={() => toggleDropdown("personalityTest")}
          >
            <span>Personality Test</span>
            {dropdown === "personalityTest" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTest" && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">16 Types</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">DISC Personality</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Career Aptitude</a>
            </div>
          )}
        </div>

        <div className="relative">
          <button 
            className="text-gray-700 font-semibold flex items-center space-x-1"
            onClick={() => toggleDropdown("personalityTypes")}
          >
            <span>Personality Types</span>
            {dropdown === "personalityTypes" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTypes" && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ISFJ - Defender</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">INTJ - Architect</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ENFP - Campaigner</a>
            </div>
          )}
        </div>
        
        <a href="#" className="text-gray-700 font-semibold">Enneagram</a>
      </div>
      
     
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </button>


       {/* Login Section with Dropdown */}
       <div className="relative">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setUserMenu(!userMenu)}>
          <span className="text-gray-700 hidden md:inline">Log in</span>
          <div className="w-10 h-10 bg-pink-200 rounded-full"></div>
        </div>
        {userMenu && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
            <p className="block px-4 py-2 text-gray-700">user@example.com</p>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sign Out</a>
          </div>
        )}
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenu && (
        <div className="fixed top-16 left-0 w-full h-full bg-white shadow-md md:hidden flex flex-col items-center p-6 overflow-auto z-40">
          <button className="text-gray-700 font-semibold w-full text-left py-2 flex items-center space-x-1" onClick={() => toggleDropdown("personalityTest")}>
            <span>Personality Test</span>
            {dropdown === "personalityTest" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTest" && (
            <div className="w-full bg-gray-100 rounded-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">16 Types</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">DISC Personality</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">Career Aptitude</a>
            </div>
          )}
          <button className="text-gray-700 font-semibold w-full text-left py-2 mt-2 flex items-center space-x-1" onClick={() => toggleDropdown("personalityTypes")}>
            <span>Personality Types</span>
            {dropdown === "personalityTypes" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {dropdown === "personalityTypes" && (
            <div className="w-full bg-gray-100 rounded-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ISFJ - Defender</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">INTJ - Architect</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">ENFP - Campaigner</a>
            </div>
          )}
          <a href="#" className="text-gray-700 font-semibold mt-4">Enneagram</a>
        </div>
      )}
    </nav>
    <section className="relative w-full flex flex-col md:flex-row items-center bg-white">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 bg-blue-900 text-white p-8 md:p-16 rounded-tr-full flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">Discover Your</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300">True Self</h1>
          <p className="mt-4 text-lg md:text-xl">
            Reliable, in-depth personality insights for growth
            <br /> and collaboration
          </p>
        </div>
        
        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <img src={blogImage} alt="Personality Test" className="w-80 h-64 object-cover rounded-lg" />
        </div>
      </section>
  <div className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Wondering how well we know you?</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-8 md:px-16 bg-blue-300 py-6">
        {["16 Types Personality", "Enneagram Personality", "DISC Personality", "Career Aptitude", "16 Types Personality", "Enneagram Personality", "DISC Personality"].map((test, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg"></div>
            <p className="mt-4 text-white font-semibold">{test}</p>
          </div>
        ))}
      </div>
    </div>
    <section className=" py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Testimonials</h2>
      <p className="text-lg text-gray-700">Hear from others like you</p>
      <div className="w-full bg-yellow-300 py-8 px-8">
      <div className="overflow-hidden mt-8 ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }, (_, i) => (
            <div key={i} className="flex min-w-full justify-center gap-4">
              {testimonials.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide).map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center w-1/4">
                  <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center gap-2">
                    {testimonial.name} <span>{testimonial.country}</span>
                  </h3>
                  <p className="text-blue-500 font-medium">{testimonial.type}</p>
                  <p className="mt-2 text-gray-700">{testimonial.review}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* Slider Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(testimonials.length / itemsPerSlide) }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-gray-900" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </section>
    <section className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What's New on Our Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-8 md:px-16">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={post.image} alt="Blog Post" className="w-10/12 h-60 object-cover rounded-lg" />
            <p className="mt-4 text-gray-500 text-sm">{post.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-blue-700 cursor-pointer flex items-center group">
              {post.title} 
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </h3>
          </div>
        ))}
      </div>
    </section>
    <footer className="bg-blue-900 text-white py-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe for Updates</h3>
          <div className="mt-2 flex justify-center md:justify-start ">
            <input 
              type="email" 
              placeholder="Type your email" 
              className="p-2 rounded-l-md text-gray-800 focus:outline-none bg-white"
            />
            <button className="bg-blue-400 text-white px-4 py-2 rounded-r-md font-semibold">Submit</button>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Blogs</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-end space-x-3">
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full"><FaYoutube /></a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full"><FaLinkedinIn /></a>
            <a href="#" className="bg-white text-blue-900 p-2 rounded-full"><FaPinterestP /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm">
        Copyright 2025, PersonalityAffairs. All rights reserved.
      </div>
    </footer>
  </>
  );
};

export default Navbar;