import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { CodingProfiles } from './components/CodingProfiles';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Header from './components/Header';
import {Footer} from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Header />
      <div id="home" className="min-h-screen cursor-none bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Hero/>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <CodingProfiles />
        <Contact />
      </div>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;