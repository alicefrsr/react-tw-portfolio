import { motion } from 'framer-motion';

let skills = [
  'MacOS',
  'VS Code',
  'Git',
  'Github',
  'Command Line',
  'HTML5',
  'CSS3',
  'Javascript',
  'React',
  'React Router',
  'Bootstrap',
  'Tailwindcss',
  'CSS Modules',
  'Redux',
  'Tanstack Query',
  'RESTful APIs',
  'Node.js',
  'Express',
  'MongoDB',
  'Responsive',
  'Web accessibility',
  'WCAG 2.1',
  'Axe DevTools',
  'axe Accessibility Linter',
  'axe-core-react',
];
const skillsLevel1 = [
  'Linux',
  'Windows',
  'Java',
  'Swift',
  'SwiftUI',
  'Python',
  'Styled Components',
  'Supabase',
];
const skillsNow = ['NextJS', 'Typescript', 'Python', 'Web accessibility'];
const skillsToDo = [
  'React Native',
  'Testing',
  'CI/CD',
  'Jest',
  'Cypress',
  'Jenkins',
  'Solidity',
];
const languages = ['English', 'French', 'Spanish'];

function Skills() {
  return (
    <section id='skills' className='pt-20 pb-12 lg:pt-16 tracking-wide '>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[70%] h-fit lg:h-screen px-6 mx-auto flex flex-col justify-center w-full '>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Skills</h3> */}

        {/* skills */}
        <div className='flex flex-col'>
          {/* <motion.h3
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='subtitle pb-12 text-teal-600 dark:text-teal-300 '
          >
            Toolbox
          </motion.h3> */}
          <h3 className='font-semibold text-[3rem] font-satisfy mb-8 '>
            Toolbox
          </h3>
          <div className='flex flex-col flex-1 gap-10 '>
            <div>
              <p className='pb-1 font-semibold'>
                What I use on a daily or regular basis:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skills.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold'>
                Technologies I had some exposure to:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsLevel1.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold'>
                What I am learning at the moment:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsNow.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold'>
                What I am curious about and would like to explore in 2024:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsToDo.map((skill, index) => (
                  <li key={index} className='tech-outline'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold'>Non-programming languages...</p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {languages.map((language, index) => (
                  <li key={index} className='lang-outline'>
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
