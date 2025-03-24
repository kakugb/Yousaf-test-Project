import React, { useState } from "react";
import { FaBars, FaTimes, FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function INFJBlogs() {
  return (
    <div className="w-full pt-20 ">
      <div className="w-full flex font-sans">
        {/* Sidebar (Fixed on Desktop, Collapsible on Mobile) */}
        <aside
          className={`hidden md:block fixed top-24 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 `}
        >
          <div className="p-6">
            <h2 className="text-lg font-bold text-[#1A3C34] mb-6">Explore This Type</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#introduction"
                  className="flex items-center text-[#1A73E8] bg-[#F5F5F5] border-l-4 border-[#1A73E8] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="#strengths-weaknesses"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Strengths & Weaknesses
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#romantic-relationships"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Romantic Relationships
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#friendships"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Friendships
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#parenthood"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Parenthood
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#career-paths"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Career Paths
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#workplace-habits"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Workplace Habits
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#conclusion"
                  className="flex items-center text-[#1A3C34] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  Conclusion
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  to="#premium-suite"
                  className="flex items-center text-[#34A853] pl-4 py-2 text-sm hover:bg-[#E8ECEF] transition-colors"
                >
                  <FaStar className="mr-2 text-[#34A853] text-xs" />
                  Premium Advocate Suite
                  <FaChevronRight className="ml-auto text-[#B0BEC5] text-xs" />
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content (Scrollable) */}
        <main className="w-full flex-1 ml-0 md:ml-64 lg:ml-72 py-2 px-[2px]  overflow-y-auto ">
          {/* Navigation Links (Updated to be in one row and scrollable) */}
          <nav className="md:hidden flex space-x-11 mb-6 py-4 overflow-x-auto whitespace-nowrap bg-white shadow-md">
            <Link
              to="#introduction"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Introduction
            </Link>
            <Link
              to="#strengths-weaknesses"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Strengths & Weaknesses
            </Link>
            <Link
              to="#romantic-relationships"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Romantic Relationships
            </Link>
            <Link
              to="#friendships"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Friendships
            </Link>
            <Link
              to="#parenthood"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Parenthood
            </Link>
            <Link
              to="#career-paths"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Career Paths
            </Link>
            <Link
              to="#workplace-habits"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Workplace Habits
            </Link>
            <Link
              to="#conclusion"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Conclusion
            </Link>
            <Link
              to="#premium-suite"
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              Premium Advocate Suite
            </Link>
          </nav>

          {/* Existing Content */}
          <section id="introduction">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A3C34] mb-6">Introduction</h3>
            <blockquote className="border-l-4 border-[#1A73E8] pl-4 italic text-[#5F6368] mb-6">
              Treat people as if they were what they ought to be and you help them to become what they are capable of being.
              <br />
              <span className="text-sm text-[#5F6368] block mt-2">— Johann Wolfgang von Goethe</span>
            </blockquote>
            <p className="text-[#5F6368] mb-4 text-base leading-relaxed">
              Idealistic and principled, people with the INFJ personality type (Advocates) aren’t content to coast through life – they want to stand up and make a difference. For these compassionate personalities, success doesn’t come from money or status but from seeking fulfillment, helping others, and being a force for good in the world.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default INFJBlogs;