import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  // Hardcoded timeline data
  const timeLineData = [
    {
      timelineType: "work",
      dateRange: "2025",
      title: "Freelance Developer",
      name: "AI-based Projects",
      techStack: "Python, FastAPI, React.js, OpenAI, Gemini API, Docker, AWS",
      summaryPoints: "Worked as a freelancer building AI-powered applications, real-time dashboards, and automation tools for clients. Delivered scalable solutions integrating OpenAI, Gemini, and cloud services."
    },
    {
      timelineType: "education",
      dateRange: "2021 – 2024",
      name: "Vikas Degree College, Sircilla",
      title: "B.Com (Computer Applications)",
      summaryPoints: "Focused on computer applications, programming, and data analysis."
    },
    {
      timelineType: "education",
      dateRange: "2020 – 2021",
      name: "Sai Sri Junior College, Sircilla",
      title: "Intermediate (MPC)",
      summaryPoints: "Mathematics, Physics, and Chemistry specialization."
    },
    {
      timelineType: "education",
      dateRange: "2018 – 2019",
      name: "Telangana Model School, Sircilla",
      title: "SSC",
      summaryPoints: "Completed secondary school with distinction."
    },
    {
      timelineType: "work",
      dateRange: "2024",
      title: "AWS Cloud Practitioner",
      name: "Amazon Certification",
      techStack: "AWS Services, Cloud Fundamentals",
      summaryPoints: "Earned AWS Certified Cloud Practitioner credential."
    },
    {
      timelineType: "work",
      dateRange: "2024",
      title: "Software Engineering Virtual Internship",
      name: "JP Morgan",
      techStack: "Software Engineering, Agile Practices",
      summaryPoints: "Hands-on virtual internship experience in software engineering tasks."
    },
    {
      timelineType: "work",
      dateRange: "2024",
      title: "Website Development Certification",
      name: "Infosys",
      techStack: "Web Development, React, Node.js",
      summaryPoints: "Completed website development training & certification."
    },
    {
      timelineType: "work",
      dateRange: "2024",
      title: "Data Analytics Certification",
      name: "LinkedIn Learning",
      techStack: "Python, SQL, Power BI",
      summaryPoints: "Certified in Data Analytics through LinkedIn Learning."
    }
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: '7px solid rgb(33, 150, 243)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
