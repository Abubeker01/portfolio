"use client";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() =>{
    if(dark){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  },[dark]);

  return (
    <header className="sticky top-3 z-50 mx-3 sm:mx-6 md:mx-16 px-3 sm:px-4 md:px-6 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur flex items-center border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
      <div className="hidden md:block text-2xl font-bold tracking-wider font-arizonia text-gray-600 dark:text-gray-300">
        Abubeker
      </div>
      <nav className="flex flex-row items-center w-full justify-center md:justify-end gap-3 sm:gap-5 md:gap-8 overflow-x-auto no-scrollbar">
        <a
          href="#home"
          className="hidden md:inline-block text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          Case Studies
        </a>
        <a
          href="#skill"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          Get In Touch
        </a>
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors flex-shrink-0"
          aria-label="toggle theme"
          onClick={() =>setDark((prev) =>!prev)}
        >
          <CiLight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600" />
        </button>
      </nav>
    </header>
  );
}
