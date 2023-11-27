import omnifoodImg from '../images/projects/omnifood.png';
import guessImg from '../images/projects/guess.png';
import splitterImg from '../images/projects/splitter.png';
import manageImg from '../images/projects/manage.png';
import devfinderImg from '../images/projects/devfinder.png';
import todoappImg from '../images/projects/todoapp.png';
import expensetrackerImg from '../images/projects/expensetracker.png';
import proshopProductScreenImg from '../images/projects/proshopProductScreen.png';

const projectsData = [
  {
    id: 1,
    // imageURL: '../assets/images/projects/omnifood.png',
    imageURL: omnifoodImg,
    title: 'Omnifood',
    desc: 'Static website showcasing a food delivery company, from my first tutorial with HTML and CSS.',
    tech: ['HTML', 'responsive CSS', 'Vanilla JS'],
    other: '',
    demoURL: 'https://food-ai-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/Omnifood',
    categories: ['HTML/CSS Integration'],
    // category: 'HTML/CSS Integration',
    siteURL: '',
  },
  {
    id: 2,
    // imageURL: '../assets/images/projects/guess.png',
    imageURL: guessImg,
    title: 'Guessing game',
    desc: 'Guess The Number game, retro style.',
    tech: ['HTML', 'CSS', 'Vanilla JS'],
    other: '',
    demoURL: 'https://guessing-game-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/GuessTheNumber',
    categories: ['Vanilla JS'],
    // category: 'Vanilla JS',
    siteURL: '',
  },
  {
    id: 3,
    // imageURL: '../assets/images/projects/splitter.png ',
    imageURL: splitterImg,
    title: 'Splitter',
    desc: 'Tip calculator / bill splitter app.',
    tech: ['HTML', 'responsive CSS', 'Vanilla JS'],
    other: '(Frontend Mentor challenge with CSS changes for accessibility).',
    demoURL: 'https://splitter-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/Splitter',
    categories: ['Vanilla JS', 'HTML/CSS Integration'],
    // category: 'Vanilla JS',
    siteURL: '',
  },
  {
    id: 4,
    // imageURL: '../assets/images/projects/manage.png ',
    imageURL: manageImg,
    title: 'Manage',
    desc: 'Static website. Built to learn Tailwind.',
    tech: ['HTML', 'responsive CSS', 'Tailwindcss'],
    other: '(Frontend Mentor challenge).',
    demoURL: 'https://thriving-sfogliatella-1cde36.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/CSS-integration-tailwindcss',
    categories: ['HTML/CSS Integration'],
    // category: 'HTML/CSS Integration',
    siteURL: '',
  },
  {
    id: 5,
    // imageURL: '../assets/images/projects/devfinder.png',
    imageURL: devfinderImg,
    title: 'Devfinder',
    desc: 'React App to search for Github users information. To implement dark/light mode. (Frontend Mentor challenge).',
    tech: ['React', 'context API', 'responsive CSS', 'Github API'],
    other: '',
    demoURL: 'https://devfinder-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/React-devfinder-App',
    categories: ['React', 'HTML/CSS Integration'],
    // category: 'React',
    siteURL: '',
  },
  {
    id: 6,
    // imageURL: '../assets/images/projects/todoapp.png ',
    imageURL: todoappImg,
    title: 'Todo app',
    desc: 'React App to add, edit, delete todos, saved to local storage.',
    tech: ['React:', 'useContext', 'useReducer', 'custom hooks'],
    other: '',
    demoURL: 'https://another-todoapp.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/React-todoApp',
    categories: ['React'],
    // category: 'React',
    siteURL: '',
  },
  {
    id: 7,
    // imageURL: '../assets/images/projects/expensetracker.png',
    imageURL: expensetrackerImg,
    title: 'Expensetracker app',
    desc: 'Simple budget App to add and delete income and expenses.',
    tech: ['React', 'Express', 'MongoDB'],
    other: '',
    demoURL: 'https://expense-tracker-app-9kw2.onrender.com',
    codeURL: 'https://github.com/alicefrsr/React-expense-tracker-App',
    categories: ['React', 'Full Stack'],
    // category: 'Full Stack',
    siteURL: '',
  },
  {
    id: 8,
    // imageURL: '../assets/images/projects/proshopProductScreen.png',
    imageURL: proshopProductScreenImg,
    title: 'e-commerce',
    desc: 'Fullstack e-commerce platform. Authentification with JWT, PayPal / Credit card integration.',
    tech: ['React', 'Bootstrap', 'Redux', 'Express', 'MongoDB'],
    other: '',
    demoURL: 'https://e-commerce-demo-proshop.onrender.com',
    codeURL: 'https://github.com/alicefrsr/e-commerce-demo',
    categories: ['React', 'Full Stack'],
    // category: 'Full Stack',
    siteURL: '',
  },
];

export default projectsData;
