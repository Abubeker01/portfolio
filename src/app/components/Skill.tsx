import { type ReactNode } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaJava, FaPhp} from 'react-icons/fa';
import { SiJavascript, SiFigma, SiMysql, SiGit, SiTypescript, SiTailwindcss, SiPostgresql, SiCplusplus } from 'react-icons/si';

// Type definition for a single skill's props
interface SkillProps {
  icon: ReactNode;
  name: string;
}

// Type definition for the Section component's props
interface SectionProps {
  title: string;
  skills: SkillProps[];
}

// Individual Skill Card Component
const SkillCard = ({ icon, name }: SkillProps) => (
  <div className="flex flex-col items-center justify-center p-4 transition-transform transform hover:scale-110">
    <div className="text-5xl mb-2 text-gray-700 dark:text-gray-100">{icon}</div>
    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{name}</p>
  </div>
);

// Reusable Section Component
const Section = ({ title, skills }: SectionProps) => (
  <div className="mb-12">
    <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300 mb-6 tracking-widest">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6">
      {skills.map((skill) => (
        <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);


// Main Skills Section Component
const Skills = () => {
  const usingNowSkills: SkillProps[] = [
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiFigma className="text-purple-600" />, name: 'Figma' },
    { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <FaBootstrap className="text-purple-700" />, name: 'Bootstrap' },
    { icon: <SiGit className="text-red-500" />, name: 'Git' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'NodeJS' },
    { icon: <SiTypescript className="text-blue-700" />, name: 'TypeScript' },
  ];

  const learningSkills: SkillProps[] = [
    { icon: <SiTailwindcss className="text-teal-500" />, name: 'Tailwind CSS' },
    { icon: <SiPostgresql className="text-blue-800" />, name: 'PostgreSQL' },
  ];

  const otherSkills: SkillProps[] = [
    { icon: <SiCplusplus className="text-blue-900" />, name: 'C++' },
    { icon: <FaJava className="text-red-600" />, name: 'Java' },
    { icon: <FaPhp className="text-indigo-500" />, name: 'PHP' },
  ];

  return (
    <div className="w-full font-sans text-gray-800 dark:text-gray-300">
      <div className="max-w-6xl mx-auto p-8 md:p-12 lg:p-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wider dark:text-gray-300">SKILLS</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2"></div>
        </div>

        <Section title="USING NOW:" skills={usingNowSkills} />
        <Section title="LEARNING:" skills={learningSkills} />
        <Section title="OTHER SKILLS:" skills={otherSkills} />
      </div>
    </div>
  );
};

export default function Skill() {
  return (
    <main
      id='skill'
      className="flex min-h-screen w-full justify-center bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300 scroll-mt-22"
    >
      <Skills />
    </main>
  );
}