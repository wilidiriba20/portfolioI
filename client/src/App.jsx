import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DeveloperMode from './components/DeveloperMode';

export default function App() {
  const [devMode, setDevMode] = useState(false);

  if (devMode) {
    return <DeveloperMode onExit={() => setDevMode(false)} />;
  }

  return (
    <>
      <Navbar onDevMode={() => setDevMode(true)} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact onDevMode={() => setDevMode(true)} />
      </main>
      <Footer />
    </>
  );
}
