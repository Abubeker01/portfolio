import { Mail, Phone } from 'lucide-react';

// Main component for the contact section
export default function ContactSection() {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question, a project in mind, or just want to say hello? I'd love to hear from you!
            Please use the form below or find my contact details below
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email:</h3>
                <a href="mailto:abubekermurad1@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  abubekermurad1@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone:</h3>
                <a href="tel:+251965846324" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +251965846324
                </a>
              </div>
            </div>
            <div className="pt-4">
               <button className="bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
                    Resume
               </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Please enter your email"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  autoComplete="tel"
                  placeholder="Enter mobile"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white font-bold bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 group"
                >
                  Submit
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}