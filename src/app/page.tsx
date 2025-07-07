import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';

export default function Home(){
  return (
    <main className="bg-white text-primary">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}