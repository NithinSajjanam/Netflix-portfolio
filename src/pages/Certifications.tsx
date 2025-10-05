import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      issuedDate: '2024',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      iconName: 'university',
    },
    {
      title: 'Software Engineering',
      issuer: 'JP Morgan',
      issuedDate: '2024',
      link: 'https://careers.jpmorgan.com/skills/',
      iconName: 'university',
    },
    {
      title: 'Website Development',
      issuer: 'Infosys',
      issuedDate: '2024',
      link: 'https://www.infosys.com/training',
      iconName: 'university',
    },
    {
      title: 'Data Analytics',
      issuer: 'LinkedIn Learning',
      issuedDate: '2024',
      link: 'https://www.linkedin.com/learning/',
      iconName: 'coursera',
    },
    {
      title: 'Machine Learning',
      issuer: 'Coursera',
      issuedDate: '2024',
      link: 'https://www.coursera.org/learn/machine-learning',
      iconName: 'coursera',
    },
    {
      title: 'AI & Deep Learning',
      issuer: 'Udemy',
      issuedDate: '2024',
      link: 'https://www.udemy.com/course/deeplearning/',
      iconName: 'udemy',
    },
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
