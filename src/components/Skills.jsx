let skillsDaily = [
  'MacOS',
  'VS Code',
  'Git',
  'Github',
  'Command Line',
  'HTML5',
  'CSS3',
  'Tailwindcss',
  'Javascript',
  'React',
  'React Testing Library',
];
let skillsRegular = [
  'CSS Modules',
  'React Router',
  'Tanstack Query',
  'Redux',
  'RESTful APIs',
  'Postman',
  'Node.js',
  'npm',
  'Express',
  'MongoDB',
  'Responsive',
  'Web accessibility',
  'WCAG',
  'Axe DevTools',
  // 'axe Accessibility Linter',
  'axe-core-react',
];
const skillsIntro = [
  'Linux',
  'Windows',
  'Java',
  'Swift',
  'SwiftUI',
  'Python',
  'Bootstrap',
  'Styled Components',
  'Supabase',
];
const skillsNow = [
  'React Testing Library',
  'Jest / Vitest',
  'Typescript',
  'Python',
  'Web accessibility',
];
// const skillsToDo = [
//   'React Native',
//   'Testing',
//   'CI/CD',
//   'Jest',
//   'Cypress',
//   'Jenkins',
//   'Solidity',
// ];
const languages = ['English', 'French', 'Spanish'];

function Skills() {
  return (
    <section id='skills' className='tracking-wide pt-24 pb-12'>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[70%] h-fit px-6 mx-auto flex flex-col justify-center w-full '>
        {/* skills */}
        <div className='flex flex-col'>
          <h3 className='font-semibold text-[3rem] mb-8 py-8'>Toolbox</h3>

          <div className='flex flex-col flex-1 gap-10 '>
            <div>
              <p className='pb-1 font-semibold text-xs sm:text-base'>
                What I use on a <span className='highlight'> daily </span>
                basis:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsDaily.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='pb-1 font-semibold text-xs sm:text-base'>
                What I use on a <span className='highlight'> regular </span>{' '}
                basis:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsRegular.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold text-xs sm:text-base'>
                Technologies I had a{' '}
                <span className='highlight'> basic introduction </span> to:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsIntro.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1 font-semibold text-xs sm:text-base'>
                What I am <span className='highlight'> actively learning </span>{' '}
                at the moment:
              </p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsNow.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div>
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
            </div> */}

            <div>
              <p className='pb-1 font-semibold text-xs sm:text-base'>
                Non-programming languages...
              </p>
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
