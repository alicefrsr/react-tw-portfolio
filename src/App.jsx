import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import projectsData from './assets/data/projectsData';
import Homepage from './pages/Homepage';
// import ProjectModal from './components/ProjectModal';

function App() {
  // const location = useLocation();
  // const previousLocation = location.state?.previousLocation;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes location={previousLocation || location}>
    //     <Route path='/' element={<Homepage />} />
    //   </Routes>
    //   {previousLocation && (
    //     <Routes>
    //       <Route path='/projects/:id' element={<ProjectModal />} />
    //     </Routes>
    //   )}
    // </BrowserRouter>
  );
}

export default App;
