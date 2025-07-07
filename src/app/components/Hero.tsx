import { Mail, Github, Linkedin } from 'lucide-react';

// Main component for the entire page
export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="flex justify-between items-center py-8">
          <div className="text-2xl font-bold tracking-wider">
            Abubeker
          </div>
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Recent Work</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Get In Touch</a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="mt-10 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                Hi there! 👋<br />
                I'm Abubeker
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a Full-Stack Software Developer passionate about bringing digital experiences to life. From Figma designs to robust React front ends and Node.js back ends, I build intuitive products that solve real problems. I thrive in agile, collaborative environments and love exploring new tech. Let's create something impactful together.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Mail className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex justify-center items-center">
               {/* Decorative background shape */}
               <div className="absolute inset-0 bg-blue-50 transform -skew-y-6 rounded-3xl z-0 opacity-20"></div>
               <div className="relative z-10 p-2 bg-white rounded-2xl shadow-2xl">
                 <img
                    src="https://i.imgur.com/O1o4YvT.jpeg"
                    alt="Abubeker - Full-Stack Developer"
                    className="rounded-xl w-full max-w-sm md:max-w-md"
                    onError={(e) => { 
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://placehold.co/400x500/e2e8f0/4a5568?text=Image+Not+Found';
                    }}
                 />
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}