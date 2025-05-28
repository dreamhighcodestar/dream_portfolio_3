
import React from 'react';
import AnimatedImage from './AnimatedImage';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind CSS", icon: "/portfolio-uploads/skill_logo/tailwind.png" },
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "/portfolio-uploads/skill_logo/express.png" },
        { name: "Laravel", icon: "/portfolio-uploads/skill_logo/laravel.png" },
        { name: "PHP", icon: "/portfolio-uploads/skill_logo/php.png" },
        { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
        { name: "NestJS", icon: "/portfolio-uploads/skill_logo/nest.png" }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MariaDB", icon: "/portfolio-uploads/skill_logo/mariadb.png" }
      ]
    },
    {
      name: "Other",
      skills: [
        { name: "API Integration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Automation Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "AI Content", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Shopify", icon: "/portfolio-uploads/skill_logo/shopify.png" },
        { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Authentication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg" },
        { name: "CRUD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "WebSockets", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        { name: "Responsive Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          <span className="text-blue-500">#</span> Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-900/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="inline-block w-2 h-2 bg-blue-500 mr-2"></span>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="w-12 h-12 mb-2 bg-blue-900/30 rounded-lg p-2 transition-all duration-300 transform group-hover:scale-110">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-blue-300 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-full overflow-hidden rounded-lg shadow-xl">
                <AnimatedImage 
                  src="/portfolio-uploads/photo/image_1.png" 
                  alt="Ivan Tereshchenko"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg -z-0"></div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 p-6 rounded-lg border border-blue-900/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Clean & Modern UI</h3>
            </div>
            <p className="text-gray-400">Building beautiful, responsive interfaces that provide excellent user experiences across all devices.</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 p-6 rounded-lg border border-blue-900/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Robust Backend</h3>
            </div>
            <p className="text-gray-400">Developing secure, scalable, and efficient server-side solutions that power complex applications.</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 p-6 rounded-lg border border-blue-900/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">AI Integration</h3>
            </div>
            <p className="text-gray-400">Leveraging artificial intelligence to enhance applications with smart, automated capabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
