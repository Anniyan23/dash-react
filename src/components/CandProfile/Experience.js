import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.9em;
  position: relative;
  right: 30px;
  bottom: 15px;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 180px;
    right: 20px;
    bottom: 10px;
    padding: 8px;
  }
     @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 160px;
    right: 10px;
    bottom: 5px;
    padding: 6px;
  }
`;

const ExperienceItem = styled.div`
  margin: 4px 0;

  @media (max-width: 768px) {
    margin: 3px 0;
  }

  @media (max-width: 480px) {
    margin: 2px 0;
  }
`;

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatchDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  @media (max-width: 768px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    margin-top: 2px;
  }
`;

const MatchPercentage = styled.strong`
  position: relative;
  top: 5px;
  display: flex;
  background-color: rgb(200, 247, 200);
  color: rgb(48, 247, 131);
  border-radius: 25px;
  height: 30px;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 2px 14px;
  margin-top: 6px;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 28px;
    width: 45px;
    padding: 2px 12px;
    margin-top: 5px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    height: 26px;
    width: 40px;
    padding: 2px 10px;
    margin-top: 4px;
    margin-right: 6px;
  }
`;

const ViewDetails = styled.a`
  color: rgb(63, 78, 94);
  margin-top: 19px;
  text-decoration: underline;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 17px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

const Experience = ({ position, salary, matchPercentage }) => {
  return (
    <ExperienceContainer>
      <ExperienceItem>Applied for: {position}</ExperienceItem>
      <ExperienceItem>Exp. CTC: {salary}</ExperienceItem>
      <MatchContainer>
        Match Percentage:
        <MatchDetails>
          <MatchPercentage>{matchPercentage}%</MatchPercentage>
          <ViewDetails href="#">View Details</ViewDetails>
        </MatchDetails>
      </MatchContainer>
    </ExperienceContainer>
  );
};

export default Experience;
