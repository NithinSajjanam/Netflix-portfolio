import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

interface ProfileBannerProps {
  headline: string;
  summary: string;
  resumeUrl: string;
  linkedinUrl: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  headline,
  summary,
  resumeUrl,
  linkedinUrl,
}) => {
  const handleResumeClick = () => {
    window.open(resumeUrl, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{headline}</h1>
        <p className="banner-description">{summary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
