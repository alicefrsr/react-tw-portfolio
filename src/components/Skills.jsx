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
  'React-Router',
  'Bootstrap',
  'Tailwindcss',
  'Redux',
  'Tanstack Query',
  'RESTful APIs',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Responsive',
  'Web accessibility',
];
const skillsLevel1 = [
  'Linux',
  'Java',
  'Swift',
  'SwiftUI',
  'Python',
  'Styled Components',
];
const skillsNow = ['NextJS', 'Typescript', 'Python'];
const skillsToDo = [
  'Solidity',
  'Testing',
  'CI/CD',
  'Jest',
  'Cypress',
  'Jenkins',
];
const skills5 = ['React', 'Python'];

function Skills() {
  return (
    <section id='skills' className='pt-20 lg:pt-0 tracking-wide '>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[60%] h-fit lg:h-screen px-6 mx-auto flex flex-col justify-center w-full '>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Skills</h3> */}

        {/* skills */}
        <div className='flex flex-col '>
          <h3 className='subtitle text-teal-500 '>Toolbox</h3>
          <div className='flex flex-col flex-1 gap-8 '>
            <div>
              <p className='pb-1'>What I use on a daily or regular basis:</p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skills.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1'>
                Technologies I had a brief introduction to:
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
              <p className='pb-1'>What I am learning at the moment:</p>
              <ul className='flex flex-wrap gap-2 pt-2'>
                {skillsNow.map((skill, index) => (
                  <li key={index} className='tech-full'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='pb-1'>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
