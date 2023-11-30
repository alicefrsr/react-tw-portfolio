let skills = [
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
  'Styled Components',
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
const skills2 = ['Java', 'Swift', 'SwiftUI', 'Python'];
const skills3 = ['NextJS', 'Typescript', 'Python'];

function Skills() {
  return (
    <section id='skills' className='h-screen'>
      {/* Container */}
      <div className='lg:max-w-[58rem] sm:max-w-[60%] px-6 h-screen mx-auto flex items-center w-full'>
        {/* <h3 className='text-[2rem] font-[700] mb-8'>Skills</h3> */}

        {/* skills */}
        <div className='flex flex-col flex-1 gap-6'>
          <h3 className='subtitle'>Toolbox</h3>

          <div>
            <p className='flex items-center'>
              What I use and/or think about on a regular basis:
            </p>
            <ul className='flex flex-wrap gap-2 pt-2'>
              {skills.map((skill) => (
                <li
                  key='skill'
                  className='bg-slate-200 rounded-sm px-2 py-1 font-dm'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className=''>Technologies I had a brief introduction to:</p>
            <ul className='flex flex-wrap gap-2 pt-2'>
              {skills2.map((skill) => (
                <li
                  key='skill'
                  className='bg-slate-200 rounded-sm px-2 py-1 font-dm'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className=''>What I am exploring at the moment:</p>
            <ul className='flex flex-wrap gap-2 pt-2'>
              {skills3.map((skill) => (
                <li
                  key='skill'
                  className='bg-slate-200 rounded-sm px-2 py-1 font-dm'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
