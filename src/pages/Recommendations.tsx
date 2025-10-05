import React from 'react';
import './Recommendations.css';
import profilePic from '../images/chris.jpg'; // Replace with your actual image
     // Add Akil's picture in your images folder

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
     

      {/* Recommendation from Akil */}
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={profilePic} alt="Akil" className="profile-pic" />
          <div>
            <h3>M.Eshwar</h3>
            <p>Full Stack Developer @ Big Company</p>
            <p className="date">September 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I’ve had the privilege of working with Sajjanam on multiple projects, and I can confidently say that their technical expertise and dedication are top-notch."</p>
          <p>💡 "Sajjanam’s ability to seamlessly integrate frontend and backend technologies makes them stand out as a well-rounded developer. Their innovative approach to AI-powered applications and problem-solving mindset is inspiring."</p>
          <p>🤝 "Working with Sajjanam was always smooth — they are collaborative, supportive, and highly professional. They ensure team goals are achieved efficiently while helping others grow."</p>
          <p>🌟 "As a Full Stack Developer myself, I truly value Sajjanam’s contributions and would highly recommend them for any tech-driven role or challenging project."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
