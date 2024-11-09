import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl text-[#FF9966]">Technologies I Work with</h2>

          <ul className="text-gray-500 pt-2 flex flex-col gap-2">
            <b className="text-[#FF9966]">Skills & Expertise Web Development</b>
            <li>
              Proficient in JavaScript, TypeScript, HTML5, CSS3,React, Next.js with expertise in frameworks like  Tailwind CSS to build responsive and dynamic web interfaces.
            </li>

            <b className="text-[#FF9966]">Backend Development</b>
            <li>
              Experienced in using Node.js and npm for server-side development, enabling efficient, scalable applications.
            </li>

            <b className="text-[#FF9966]">Cybersecurity Fundamentals</b>
            <li>
              Completed a foundational course in cybersecurity, equipping me with essential knowledge of protecting systems, networks, and data.
            </li>

            <b className="text-[#FF9966]">Emerging Technologies</b>
            <li>
              Currently expanding expertise through courses in Artificial Intelligence and Metaverse technologies, offered at Governor House, to stay at the forefront of tech innovation.
            </li>
          </ul>
        </div>

        <div data-aos="fade-right">
          <h4 className="text-3xl md:text-5xl text-[#FF9966] dark:text-white font-bold mb-6">Skills</h4>

          <div className="mb-7" >
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Html </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">90%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 79.2,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth="1" fillOpacity="0"></path>
            </svg>
          </div>
          <div className="mb-7" >
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Css & Tailwind</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#DD9D0" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 79.2,0.5" strokeLinecap="round" stroke="#FFD700" strokeWidth="1" fillOpacity="0"></path>
            </svg>
          </div>
          <div className="mb-7" >
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Typescript </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 94.05,0.5" strokeLinecap="round" stroke="#9272D4" strokeWidth="1" fillOpacity="0"></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">React.js</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 64.35,0.5" strokeLinecap="round" stroke="#5185D4" strokeWidth="1" fillOpacity="0"></path>
            </svg>
          </div>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Next.js</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 74.25,0.5" strokeLinecap="round" stroke="#CA56F2" strokeWidth="1" fillOpacity="0"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
