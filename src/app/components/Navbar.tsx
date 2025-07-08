'use client';
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-between items-center py-8 px-4 md:px-20">
      <div className="text-2xl font-bold tracking-wider font-arizonia text-gray-600 hidden md:block">
        Abubeker
      </div>
      <nav className=" flex flex-row w-full justify-center items-center space-x-4 md:space-x-12 md:w-auto">
        <a href="#home" className="hidden md:inline-block text-gray-600 hover:text-gray-900 transition-colors">Home</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Me</a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
        <a href="#skill" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Get In Touch</a>
      </nav>
    </header>
  );
}

