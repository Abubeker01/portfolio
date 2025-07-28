import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import ScrollToTopButton from './components/scrollToTop';


export default function Home(){
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/*implementing dark mode */}

    
      <Hero />
      <About />
      <Projects />
      <Skill /> 
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}