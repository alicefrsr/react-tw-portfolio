import Navbar from '../components/Navbar';
import Hello from '../components/Hello';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Bio from '../components/Bio';

function Homepage() {
  return (
    <>
      <Navbar />
      <Hello />
      <Projects />
      <Skills />
      <Bio />
    </>
  );
}

export default Homepage;
