"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import heroImg from "@/assets/herosec.png";

// Main component for the entire page
export default function Hero() {
  return (
    <div
      id="home"
      className="bg-white min-h-screen font-sans text-gray-800 scroll-mt-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <main className="mt-10 md:mt-5 px-4 md:px-20">
          <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6 -mt-5 w-full md:w-1/2">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                Hi there!{" "}
                <span className="inline-block origin-[70%_70%] animate-wave">
                  👋
                </span>
                <br />
                I'm Abubeker
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a Full-Stack Software Developer passionate about bringing
                digital experiences to life. From Figma designs to robust React
                front ends and Node.js back ends, I build intuitive products
                that solve real problems. I thrive in agile, collaborative
                environments and love exploring new tech. Let's create something
                impactful together.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-20">
                <a
                  href="mailto:abubekermurad1@gmail.com"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-6 h-6 text-gray-700" />
                </a>
                <a
                  href="https://github.com/Abubeker01"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abubeker12/"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex justify-center items-center w-full md:w-1/2">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-blue-50 transform -skew-y-6 rounded-3xl z-0 opacity-20"></div>
              <div className="relative z-10 p-1 bg-white rounded-2xl shadow-4xl">
                <Image
                  src={heroImg}
                  alt="Abubeker - Full-Stack Developer"
                  className="h-40 w-40 rounded-full md:h-[510px] md:w-auto md:rounded-xl"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
