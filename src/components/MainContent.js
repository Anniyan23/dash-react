import React, { useState, useEffect } from 'react';
import candidates from '../data/data';
import CandidateProfile from './CandProfile/CandidateProfile';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const MainContent = ({ filters }) => {
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  useEffect(() => {
    let filtered = candidates;
    if (filters.jobTitle) {
      filtered = filtered.filter(candidate => candidate.role.toLowerCase().includes(filters.jobTitle.toLowerCase()));
    }
    if (filters.experience) {
      filtered = filtered.filter(candidate => candidate.experience.includes(filters.experience));
    }
    if (filters.location) {
      filtered = filtered.filter(candidate => candidate.location.toLowerCase().includes(filters.location.toLowerCase()));
    }
    if (filters.jobType) {
      filtered = filtered.filter(candidate => candidate.jobType.toLowerCase().includes(filters.jobType.toLowerCase()));
    }
    if (filters.jobPreferences) {
      filtered = filtered.filter(candidate => candidate.jobPreferences.toLowerCase().includes(filters.jobPreferences.toLowerCase()));
    }
    if (filters.skills) {
      filtered = filtered.filter(candidate => candidate.skills.some(skill => skill.toLowerCase().includes(filters.skills.toLowerCase())));
    }
    if (filters.certification) {
      filtered = filtered.filter(candidate => candidate.certification.toLowerCase().includes(filters.certification.toLowerCase()));
    }
    setFilteredCandidates(filtered);
  }, [filters]);

  return (
    <MainContentContainer>
      {filteredCandidates.map(candidate => (
        <CandidateProfile key={candidate.id} candidate={candidate} />
      ))}
    </MainContentContainer>
  );
};

export default MainContent;
  