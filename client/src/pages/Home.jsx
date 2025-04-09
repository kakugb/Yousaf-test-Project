import { FaArrowRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import blogImage from "../assets/blogsImg.jpg";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa"
const testimonials = [
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇺🇸",
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇬🇧",
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇨🇦",
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇦🇺",
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇩🇪",
  },
  {
    name: "Carlos Aslaona",
    type: "Defender - ISFJ",
    review: "This is my first review about the personality affairs website.",
    country: "🇫🇷",
  },
];
const blogPosts = [
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage,
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage,
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage,
  },
  {
    date: "POSTED 21 FEBRUARY 2025",
    title: "Does Your Myers-Briggs Personality Affect Job Interview Success?",
    image: blogImage,
  },
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dropdown, setDropdown] = useState(null);
    const itemsPerSlide = 4;
    const toggleDropdown = (menu) => {
      setDropdown(dropdown === menu ? null : menu);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex + 1) % Math.ceil(testimonials.length / itemsPerSlide)
        );
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
    <section className="relative w-full flex flex-col md:flex-row items-center bg-white pt-20">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 bg-blue-900 text-white p-8 md:p-16 rounded-tr-full flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">Discover Your</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
            True Self
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Reliable, in-depth personality insights for growth
            <br /> and collaboration
          </p>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <img
            src={blogImage}
            alt="Personality Test"
            className="w-80 h-64 object-cover rounded-lg"
          />
        </div>
      </section>
      <div className="py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Wondering how well we know you?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-8 md:px-16 bg-blue-300 py-6">
          {[
            "16 Types Personality",
            "Enneagram Personality",
            "DISC Personality",
            "Career Aptitude",
            "16 Types Personality",
            "Enneagram Personality",
            "DISC Personality",
          ].map((test, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg"></div>
              <p className="mt-4 text-white font-semibold">{test}</p>
            </div>
          ))}
        </div>
      </div>
      <section className=" py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Testimonials
        </h2>
        <p className="text-lg text-gray-700">Hear from others like you</p>
        <div className="w-full bg-yellow-300 py-8 px-8">
          <div className="overflow-hidden mt-8 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from(
                { length: Math.ceil(testimonials.length / itemsPerSlide) },
                (_, i) => (
                  <div key={i} className="flex min-w-full justify-center gap-4">
                    {testimonials
                      .slice(i * itemsPerSlide, (i + 1) * itemsPerSlide)
                      .map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-lg text-center w-1/4"
                        >
                          <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center gap-2">
                            {testimonial.name}{" "}
                            <span>{testimonial.country}</span>
                          </h3>
                          <p className="text-blue-500 font-medium">
                            {testimonial.type}
                          </p>
                          <p className="mt-2 text-gray-700">
                            {testimonial.review}
                          </p>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Slider Dots */}
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerSlide),
          }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </section>
      <section className="py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What's New on Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-8 md:px-16">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt="Blog Post"
                className="w-10/12 h-60 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-500 text-sm">{post.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-blue-700 cursor-pointer flex items-center group">
                {post.title}
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </h3>
            </div>
          ))}
        </div>
      </section>
     
    </>
  )
}

export default Home