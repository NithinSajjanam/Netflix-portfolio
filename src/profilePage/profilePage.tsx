import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif =
    location.state?.backgroundGif ||
    'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif'; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['recruiter', 'developer', 'stalker', 'adventure'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
          headline="Sajjanam Nityanandh"
          summary="Full Stack Developer passionate about building scalable AI-powered applications, real-time dashboards, and cloud-hosted APIs. Proficient in React.js, FastAPI, Node.js, and AWS. Experienced in developing automation tools, improving performance, and delivering clean, efficient solutions. Strong background in both frontend and backend development, with hands-on experience in deploying AI systems, trading dashboards, and workflow automation. Certified in AWS Cloud, Data Analytics, and Software Engineering, I thrive on solving complex problems with user-centered design and modern technologies."
          resumeUrl="https://nityanandh.netlify.app/"
          linkedinUrl="https://www.linkedin.com/in/nityanandh-sajjanam-994543209/"
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
