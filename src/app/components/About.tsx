import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Left Column: About Me Text */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About me
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                My journey into software development began at Adama Science & Technology University, where I graduated with a degree in Computer Science & Engineering. There, I built a strong foundation in core concepts like algorithms, data structures, software design, and computer networks.
              </p>
              <p>
                My studies blended theoretical knowledge with practical, hands-on projects, giving me a comprehensive understanding of everything from backend architectures to intuitive user interfaces. Beyond coding, I genuinely enjoy the design process, specifically leveraging Figma for wireframing, prototyping, and creating clean, user-friendly interfaces—it’s an integral part of how I approach problem-solving and product development.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {/* University Degree */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/degree.png" // Replace with your actual image path
                    alt="University Degree"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="text-gray-600">
                    Adama Science & Technology University
                  </p>
                </div>
              </div>

              {/* Cisco Certification */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   <Image
                    src="/ccna-badge.png" // Replace with your actual image path
                    alt="Cisco CCNA Certification Badge"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">
                    Completed Cisco Networking courses (CCNA)
                  </p>
                   <p className="text-gray-600">
                    via Cisco's official learning platform
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;