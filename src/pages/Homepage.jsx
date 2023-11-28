import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';

function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </>
  );
}

export default Homepage;
