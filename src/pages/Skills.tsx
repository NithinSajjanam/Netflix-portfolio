import React from 'react';
import './Skills.css';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import {
  SiTypescript,
  SiPython,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiExpress,
  SiGit,
  SiPostman,
  SiVisualstudiocode,
  SiAngular,
  SiFastapi,
} from 'react-icons/si';

const iconMap: { [key: string]: JSX.Element } = {
  JavaScript: <SiTypescript />, // using TS icon for JS/TS
  TypeScript: <SiTypescript />,
  Python: <SiPython />,
  Java: <FaJava />,
  SQL: <SiMysql />,
  React: <FaReact />,
  Angular: <SiAngular />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  Tailwind: <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  FastAPI: <SiFastapi />,
  Flask: <SiFlask />,
  Node: <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Firebase: <SiFirebase />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Git: <SiGit />,
  Postman: <SiPostman />,
  VSCode: <SiVisualstudiocode />,
};

const Skills: React.FC = () => {
  // ✅ Static skills data from your resume
  const skillsByCategory: Record<string, { name: string; description: string; icon: string }[]> = {
    Languages: [
      { name: 'JavaScript (ES6+)', description: 'Dynamic scripting for web development.', icon: 'JavaScript' },
      { name: 'TypeScript', description: 'Typed superset of JavaScript for scalable apps.', icon: 'TypeScript' },
      { name: 'Python', description: 'Versatile language for AI, ML, and backend APIs.', icon: 'Python' },
      { name: 'Java', description: 'Object-oriented programming language.', icon: 'Java' },
      { name: 'SQL', description: 'Database query and management language.', icon: 'SQL' },
    ],
    Frontend: [
      { name: 'React.js', description: 'Library for building dynamic UIs.', icon: 'React' },
      { name: 'Angular', description: 'Framework for enterprise-grade apps.', icon: 'Angular' },
      { name: 'HTML5', description: 'Markup for structuring web content.', icon: 'HTML5' },
      { name: 'CSS3', description: 'Styling and layout for web pages.', icon: 'CSS3' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework.', icon: 'Tailwind' },
      { name: 'Bootstrap', description: 'Responsive front-end framework.', icon: 'Bootstrap' },
    ],
    Backend: [
      { name: 'FastAPI', description: 'High-performance Python web framework.', icon: 'FastAPI' },
      { name: 'Flask', description: 'Lightweight Python backend framework.', icon: 'Flask' },
      { name: 'Node.js', description: 'JavaScript runtime for servers.', icon: 'Node' },
      { name: 'Express.js', description: 'Fast, unopinionated Node.js framework.', icon: 'Express' },
    ],
    'Databases & Cloud': [
      { name: 'MongoDB', description: 'NoSQL database for flexible schemas.', icon: 'MongoDB' },
      { name: 'MySQL', description: 'Relational database system.', icon: 'MySQL' },
      { name: 'Firebase', description: 'Google’s cloud-hosted NoSQL DB.', icon: 'Firebase' },
      { name: 'AWS Lambda', description: 'Serverless compute service.', icon: 'AWS' },
      { name: 'Docker', description: 'Containerization for apps.', icon: 'Docker' },
    ],
    Tools: [
      { name: 'Git', description: 'Version control system.', icon: 'Git' },
      { name: 'Postman', description: 'API testing tool.', icon: 'Postman' },
      { name: 'VS Code', description: 'Lightweight code editor.', icon: 'VSCode' },
    ],
  };

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span
                      key={i}
                      className="letter"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
