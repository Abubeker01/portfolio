// components/CaseStudies.js

import Image from 'next/image';
import { FaJs, FaFigma, FaReact, FaNodeJs, FaMousePointer } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const CaseStudies = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Case Studies
          </h2>
          <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Grid Container for Case Studies */}
        <div className="grid grid-cols-1 gap-10">

          {/* Case Study 1: ASTU Social Engagement */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side: Details */}
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 text-gray-500 mb-4">
                  <SiFlutter size={24} />
                  <FaJs size={24} />
                  <FaNodeJs size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  ASTU Social Engagement
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  As a key team member, I designed the app's interface in Figma and built the frontend. Integrated with a Node.js/Express backend to deliver a seamless mobile and web experience.
                </p>
                <div className="flex space-x-4 mt-auto">
                  <a href="#" className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
              {/* Right Side: Image */}
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/astu-mobile.png" // Ensure this image is in your /public folder
                  alt="ASTU Social Engagement App Screenshot"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Case Study 2: intentID */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Background Image */}
              <div className="hidden md:block">
                <Image
                  src="/intentid-bg.jpg" // Ensure this image is in your /public folder
                  alt="Workspace with phone and laptop"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
               {/* Right Side: Details */}
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center space-x-4 text-gray-500 mb-4">
                  <FaReact size={24} />
                  <FaJs size={24} />
                  <FaMousePointer size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  intentID
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Designed and implemented IntentID, a Web3 identity layer offering granular, revocable permissions and reusable "intent tokens" for enhanced cross-dApp interactions.
                </p>
                <div className="flex space-x-4 mt-auto">
                  <a href="#" className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                    Livse Demo
                  </a>
                  <a href="#" className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;