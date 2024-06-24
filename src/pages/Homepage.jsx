import Navbar from '../components/Navbar';
import Hello from '../components/Hello';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hello />
      <Projects />
      <Skills />
      <About />
    </>
  );
}

export default Homepage;
