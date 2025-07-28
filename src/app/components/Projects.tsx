// components/CaseStudies.js
"use client";

import Image from "next/image";
import {
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiFlutter, SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import astu from "@/assets/astup.png";
import ref from "@/assets/ref.png";

const Projects = () => {
  return (
    <section id="projects" className=" py-6 md:py-6 scroll-mt-22">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-400">Case Studies</h2>
          <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Grid Container for Case Studies */}
        <div className="grid grid-cols-1 gap-10">
          {/* Case Study 1: Astu Social */}
          <div className="bg-white dark:bg-gray-800 border 
            border-gray-200 dark:border-gray-700 
            rounded-lg shadow-sm overflow-hidden 
            hover:scale-105 transition-transform"
            onClick={() => window.open("", "_blank")}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Background Image */}
              <div className="hidden md:block">
                <Image
                  src={astu}
                  alt="Workspace with phone and laptop"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Right Side: Details */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center space-x-4 text-gray-500
                   dark:text-gray-300 mb-4">
                  <SiFlutter size={24} />
                  <FaNodeJs size={24} />
                  <SiPostgresql size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3 dark:text-gray-400">
                  ASTU Social Engagement
                </h3>
                <p className="text-gray-600 mb-6 flex-grow dark:text-gray-400">
                  As a key team member, I designed the app&apos;s interface in
                  Figma and built the frontend. Integrated with a
                  Node.js/Express backend to deliver a seamless mobile and web
                  experience.
                </p>
                <div className="flex space-x-4 mt-auto ">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      window.open("https://astu.netlify.app/", "_blank")
                    }}
                    className="px-5 py-2 text-sm font-medium text-gray-700
                     bg-gray-100 border border-gray-300 rounded-full
                     hover:bg-gray-200 transition-colors dark:bg-gray-900 
                     dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      window.open(
                        "https://github.com/Abubeker01/project.git",
                        "_blank"
                      )
                    }}
                    className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border 
                    border-gray-300 rounded-full hover:bg-gray-200 transition-colors 
                    dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: referral-system */}

          <div
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:scale-105 transition-transform"
            onClick={() => window.open("", "_blank")}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 dark:bg-gray-900 dark:text-gray-300">
              {/* Left Side: Background Image */}
              <div className="hidden md:block">
                <Image
                  src={ref}
                  alt="Workspace with phone and laptop"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Right Side: Details */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center space-x-4 text-gray-500 mb-4 dark:text-gray-400">
                  <FaReact size={24} />
                  <FaJs size={24} />
                  <SiMysql size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-5 dark:text-gray-400">
                  Referral System
                </h3>
                <p className="text-gray-600 mb-6 flex-grow dark:text-gray-400">
                  Developed this comprehensive multi-referral system end-to-end.
                  Handled all aspects from frontend user interface to backend
                  logic and database management.
                </p>
                <div className="flex space-x-4 mt-auto">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      window.open(
                        "https://github.com/Abubeker01/referralSystem.git", "_blank")
                    }}
                    className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border 
                    border-gray-300 rounded-full hover:bg-gray-200 
                    transition-colors dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
