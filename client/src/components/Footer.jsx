import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
function Footer() {
  return (
    <>
       <footer className="bg-blue-900 text-white py-3 px-6 md:px-16">
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
              <button className="bg-blue-400 text-white px-4 py-2 rounded-r-md font-semibold">
                Submit
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold">Blogs</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-end space-x-3">
              <a href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <FaYoutube />
              </a>
              <a href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-white text-blue-900 p-2 rounded-full">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 text-sm">
          Copyright 2025, PersonalityAffairs. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
