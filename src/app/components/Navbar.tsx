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
    <header className="sticky top-3 z-50 bg-white dark:bg-gray-900 flex justify-between items-center md:px-10  border-1 border-gray-300 rounded-2xl ml-16 mr-16 ">
      <div className="text-2xl font-bold tracking-wider font-arizonia text-gray-600  dark:text-gray-300 hidden md:block">
        Abubeker
      </div>
      <nav className=" flex flex-row w-full justify-center items-center space-x-4 md:space-x-12 md:w-auto">
        <a
          href="#home"
          className="hidden md:inline-block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white  transition-colors"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Case Studies
        </a>
        <a
          href="#skill"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          href="#contact"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          Get In Touch
        </a>
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
          aria-label="toggle theme"
          onClick={() =>setDark((prev) =>!prev)}
        >
          <CiLight className="w-8 h-8 text-gray-600" />
        </button>
      </nav>
    </header>
  );
}
