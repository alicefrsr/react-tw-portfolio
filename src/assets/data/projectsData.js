import omnifoodImg from '../images/projects/omnifood.png';
import guessImg from '../images/projects/guess.png';
import splitterImg from '../images/projects/splitter.png';
import devfinderImg from '../images/projects/devfinder.png';
import pizzaImg from '../images/projects/pizzaApp.png';
import quizImg from '../images/projects/quiz.png';
import todoappImg from '../images/projects/todoapp.png';
// import bitsbobsImg from '../images/projects/bitsbobs.png';
import expensetrackerImg from '../images/projects/expensetracker.png';
import proshopImg from '../images/projects/proshop-product.png';
// import elMiradorImg from '../images/projects/el-mirador.png';

const projectsData = [
  {
    id: 1,
    urlName: 'Omnifood',
    // imageURL: '../assets/images/projects/omnifood.png',
    imageURL: omnifoodImg,
    title: 'Omnifood',
    desc: 'Static website showcasing a fictitious food delivery company.',
    tech: ['HTML', 'Responsive CSS', 'Vanilla JS'],
    other: '',
    demoURL: 'https://food-ai-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/Omnifood',
    categories: ['HTML/CSS Integration', 'Responsive'],
  },
  {
    id: 2,
    urlName: 'guessing-game',
    // imageURL: '../../../img/guess.png',
    imageURL: guessImg,
    title: 'Guessing game',
    desc: 'Guess The Number game, retro style. Try to guess a random number between 1 and 100 in as little rounds as possible and save your score. One of my very first projects while learning basic logic with Javascript.',
    tech: ['HTML', 'CSS', 'Vanilla JS'],
    other: '',
    demoURL: 'https://guessing-game-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/GuessTheNumber',
    categories: ['Vanilla JS'],
  },
  {
    id: 3,
    urlName: 'splitter',
    // imageURL: '../../../img/splitter.png ',
    imageURL: splitterImg,
    title: 'Splitter',
    desc: 'Tip calculator / bill splitter app. Enter the bill amount, number of people to split between and chose the tip, the app breaks down the total to pay per person. The focus was on learning Javascript, CSS Flexbox and Web accessibility. Frontend Mentor challenge, with CSS changes for accessibility.',
    tech: ['HTML', 'Responsive CSS', 'Vanilla JS', 'Web accessibility'],
    other: '',
    demoURL: 'https://splitter-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/Splitter',
    categories: ['Vanilla JS', 'HTML/CSS Integration', 'Responsive'],
  },
  {
    id: 4,
    urlName: 'devfinder',
    // imageURL: '../../../img/devfinder.png',
    imageURL: devfinderImg,
    title: 'Devfinder',
    desc: 'A simple React app to search for Github users information using the Github API. A Frontend Mentor challenge to test my CSS skills, implement dark/light mode using the Context API.',
    tech: ['React', 'Context API', 'Responsive CSS', 'Github API'],
    other: '',
    demoURL: 'https://devfinder-demo.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/React-devfinder-App',
    categories: ['React', 'HTML/CSS Integration', 'Responsive'],
  },
  {
    id: 5,
    urlName: 'todo-app',
    // imageURL: '../../../img/todoapp.png ',
    imageURL: todoappImg,
    title: 'To-do app',
    desc: 'Another to-do app! Because what would a portfolio be without one! Add, edit, delete your todos, saved to local storage. I improved it over time and used it to learn about the Context API, useReducer, how to implement customs hooks.',
    tech: ['React:', 'Context API', 'useReducer', 'Custom hooks'],
    other: '',
    demoURL: 'https://another-todoapp.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/React-todoApp',
    categories: ['React'],
  },
  // {
  //   id: 6,
  //   urlName: 'bits-and-bobs',
  //   // imageURL: '../../../img/bitsbobs.png',
  //   imageURL: bitsbobsImg,
  //   title: 'Bits & Bobs',
  //   desc: 'Personal learning website I used as my own private kitchen to test new things with React. I find it easier to learn new concepts in isolation. It started with 3 simple components and expanded as I went along.',
  //   tech: [
  //     'React',
  //     'Custom hooks',
  //     'useReducer',
  //     'React Router',
  //     'CSS Modules',
  //     'Redux',
  //     'RESTful APIs',
  //   ],
  //   other: '',
  //   demoURL: 'https://bits-and-bobs.netlify.app/',
  //   codeURL: 'https://github.com/alicefrsr/react-bits-and-bobs',
  //   categories: ['React'],
  // },
  {
    id: 7,
    urlName: 'quiz-app',
    // imageURL: '../../../img/quiz.png ',
    imageURL: quizImg,
    title: 'Quiz app',
    desc: 'React quiz built with React with 15 questions to test your knowledge ! Features include a timer, a cancel and a restart button. A highscore is saved each time and updated if your latest score is higher than your previous highscore. Deployed on Netlify, then on Vercel just to test things out with a server and practice Express.',
    tech: ['React', 'Context API', 'Express', 'Vercel'],
    other: '',
    demoURL: 'https://react-quiz-6l23.vercel.app/',
    codeURL: 'https://github.com/alicefrsr/react-quiz',
    categories: ['React', 'Full Stack'],
  },
  {
    id: 8,
    urlName: 'pizza-app',
    // imageURL: '../../../img/pizzaApp.png ',
    imageURL: pizzaImg,
    title: "Chiara's Pizza app",
    desc: "Order your pizzas from Chiara's pizza place. Add and remove pizzas to/from your cart, use geolocation to input address for delivery, search for orders. We'll tell you how long you have to wait and if you are really  hungry, you can set your order to priority, we'll speed up that order for you! ",
    tech: [
      'React',
      'React Router',
      'Redux Toolkit',
      'Tailwindcss',
      'Responsive CSS',
      'Supabase',
    ],
    other: '',
    demoURL: 'https://chiaras-pizza.netlify.app/',
    codeURL: 'https://github.com/alicefrsr/react-router-pizza',
    categories: ['React', 'Full Stack', 'Responsive'],
  },
  {
    id: 9,
    urlName: 'expensetracker-app',
    // imageURL: '../../../img/expensetracker.png',
    imageURL: expensetrackerImg,
    title: 'Expense tracker app',
    desc: "Simple budget App to add and delete income and expenses, using the MERN stack. Rest API (Create, Read, Delete) (Temp deploy on render.com's free plan, please be patient when loading the live demo!)",
    tech: [
      'React',
      'Responsive CSS',
      'Node.js',
      'Rest API',
      'Postman',
      'Express',
      'MongoDB',
    ],
    other: '',
    demoURL: 'https://expense-tracker-app-9kw2.onrender.com',
    codeURL: 'https://github.com/alicefrsr/React-expense-tracker-App',
    categories: ['React', 'Full Stack', 'Responsive'],
  },
  {
    id: 10,
    urlName: 'e-commerce',
    // imageURL: '../../../img/proshop-product.png',
    imageURL: proshopImg,
    title: 'e-commerce',
    desc: "Fullstack e-commerce platform, following Brad Traversy's Udemy tutorial, to further consolidate my Redux skills and all CRUD operations on a database. A good exposure to authentification with JWT, PayPal & Credit card integration. (Temp deploy on render.com's free plan, please be patient when loading the live demo!)",
    tech: [
      'React',
      'Bootstrap',
      'Redux',
      'JWT Tokens',
      'Node.js',
      'Rest API',
      'Postman',
      'Express',
      'MongoDB',
    ],
    other: '',
    demoURL: 'https://e-commerce-demo-proshop.onrender.com',
    codeURL: 'https://github.com/alicefrsr/e-commerce-demo',
    categories: ['React', 'Full Stack'],
  },
  // {
  //   id: 11,
  //   urlName: 'el-mirador',
  //   // imageURL: '../../../img/el-mirador.png',
  //   imageURL: elMiradorImg,
  //   title: 'El Mirador',
  //   desc: 'Landing page for a local restaurant in Aragon, Spain. Client requested a simple static page to have an online presence other than just Google reviews. Hosted on Hostinger using Github  repo for auto-deployment. Focus on SEO.',
  //   tech: ['HTML', 'Responsive CSS', 'Hostinger', 'Github'],
  //   other: '',
  //   demoURL: 'Coming soon!',
  //   codeURL: 'Private repo for now, coming soon!',
  //   categories: ['Professional'],
  // },
];

export default projectsData;
