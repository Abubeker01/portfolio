import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="bg-white font-sans text-gray-800 antialiased scroll-mt-22">
      <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Get In Touch
              </h1>
              <div className="mt-3 flex justify-center">
                <div className="w-24 h-1 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question, a project in mind, or just want to say hello? I&apos;d
              love to hear from you! Please use the form below or find my
              contact details below.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details & Resume Button */}
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="space-y-6 mt-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email:</p>
                    <a
                      href="mailto:abubekermurad1@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      abubekermurad1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone:</p>
                    <a
                      href="tel:+251965846324"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +251965846324
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                  Resume
                </button>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-20 p-8 rounded-xl shadow-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter mobile"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit &gt;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
