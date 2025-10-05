import React, { useEffect, useState } from 'react';
import './Projects.css';
import {
  FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular,
  FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft,
  FaPython, FaVuejs
} from 'react-icons/fa';
import {
  SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5,
  SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo
} from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

// ✅ Import local image for Mini Trading App
import tradeImg from '../images/Trade.png';
import Aiimage from '../images/Ai.png';
import JobImg from '../images/Job.png';
import AiagentImg from '../images/Ai agent.png';
import carImg from '../images/car.png';
import potImg from '../images/pot.png';

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
};

const projectData = [
  {
    title: "Job Board Website",
    description: "Dynamic job board with React.js, Node.js, and MongoDB. Advanced filtering, pagination, and secure authentication.",
    image: { url: JobImg },
    techUsed: "ReactJS, NodeJS, MongoDB, CSS3, HTML5, GitHub"
  },
  {
    title: "AI Agent Web UI",
    description: "Browser-based AI Agent using Python, Playwright, and Gradio UI. Integrated OpenAI, Gemini, and DeepSeek APIs. Dockerized for deployment.",
    image: { url: AiagentImg },
    techUsed: "Python, FastAPI, Docker, AWS, ReactJS"
  },
  {
    title: "Mini Trading App",
    description: "Real-time trading dashboard with TradingView charts and particle UI. Provided live updates and actionable insights.",
    // ✅ Now using local image
    image: { url: tradeImg },
    techUsed: "ReactJS, NodeJS, Tailwind CSS, Firebase"
  },
  {
  title: "AI Website Builder",
  description: "A no-code platform that generates fully responsive websites from natural language prompts using the Google Gemini API. Features Tailwind-styled designs, live preview, and one-click ZIP download with clean production-ready code. Simplifies web creation for startups, freelancers, and businesses.",
  image: { url: Aiimage },
  techUsed: "MERN Stack, TailwindCSS, Gemini API, Node.js, Express, React, MongoDB"
},
  {
    title: "Portfolio Website",
    description: "Portfolio site showcasing projects and GitHub. Achieved 90+ Lighthouse score and fully responsive.",
    image: { url: potImg },
    techUsed: "ReactJS, Tailwind CSS, Netlify, GitHub"
  },
  {
  title: "Car Sales Performance Dashboard",
  description: "Harnessing the Power of Data to Drive Car Sales 📊 Built an interactive Power BI dashboard to analyze and visualize car sales performance, top-selling models and customer preferences, boosting efficiency and revenue.",
  image: { url: carImg }, 
  techUsed: "Power BI, DAX, Excel, Data Modeling, Data Visualization"
}

];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<typeof projectData>([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
