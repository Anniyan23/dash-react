import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import CandidateDetails from './CandidateDetails';
import Experience from './Experience';
import Skills from './Skills';

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.8em;
  background-color: #fcffff;
  margin: 0 auto;
  box-sizing: border-box;
  
  position:relative;
  bottom:90px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const CandidateProfile = ({ candidate }) => {
  if (!candidate) return null;

  const { profileImage, name, role, email, phone, position, salary, matchPercentage, skills } = candidate;

  return (
    <ProfileContainer>
      <ProfileImage src={profileImage} />
      <CandidateDetails
        name={name}
        role={role}
        email={email}
        phone={phone}
      />
      <Experience
        position={position}
        salary={salary}
        matchPercentage={matchPercentage}
      />
      <Skills skills={skills} />
    </ProfileContainer>
  );
};

CandidateProfile.propTypes = {
  candidate: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    matchPercentage: PropTypes.number.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CandidateProfile;
