import Image from "next/image";
import tempo from "@/assets/tempo.png";
import ccna from "@/assets/ccna.png";

const AboutMe = () => {
  return (
    <section id="about" className="py-10 md:py-10 scroll-mt-22 dark:bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-400">About Me</h2>
        <div className="mt-2 w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div className="bg-white mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-20 md:gap-20 bg-white dark:bg-gray-900">
          {/* Left Column: About Me Text */}
          <div className="md:col-span-2 mr-18">
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed dark:text-gray-400">
              <p>
                As a passionate and detail-oriented software developer, I thrive
                on turning complex problems into elegant, user-friendly
                solutions. My foundation in the field was built at Adama Science
                & Technology University, where I graduated with a B.Sc. in
                Computer Science & Engineering. My academic career was a deep
                dive into the core principles of software development, including
                rigorous coursework in algorithms, data structures, software
                architecture, and computer networks.
              </p>
              <p>
                This theoretical knowledge was consistently put to the test
                through a variety of hands-on projects, which gave me a good
                understanding of the full development lifecycle. I am as
                comfortable architecting a backend system as I am designing an
                intuitive user interface. My passion for design naturally led me
                to master Figma for wireframing, prototyping, and creating
                visually appealing and highly functional UIs. I am now looking to
                bring my skills and dedication to a forward-thinking team where
                I can contribute to building exceptional software.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 -mt-6 dark:text-gray-400">
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {/* University Degree */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={tempo}
                    alt="University Degree"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Adama Science & Technology University
                  </p>
                </div>
              </div>

              {/* Cisco Certification */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={ccna}
                    alt="Cisco CCNA Certification Badge"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800 dark:text-gray-400">
                    Completed Cisco Networking courses (CCNA)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    via Cisco&apos;s official learning platform
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
