import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BookIcon } from '../../assets/book.svg';
import star from '../../assets/star.png';  // Import star icon

const SkillsContainer = styled.div`
  width: 350px;
  position: relative;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.9em;
  padding: 0 8px;

  @media (max-width: 768px) {
    width: 300px;
    bottom: 10px;
    padding: 0 6px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 250px;
    bottom: 5px;
    padding: 0 4px;
  }
`;

const SkillsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    right: 20px;
  }

  @media (max-width: 480px) {
    right: 10px;
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;
  background-color: rgb(230, 238, 245);
  border-radius: 5px;
  padding: 2px;
  height: 25px;

  @media (max-width: 768px) {
    margin-right: 8px;
    margin-bottom: 4px;
    height: 23px;
  }

  @media (max-width: 480px) {
    margin-right: 6px;
    margin-bottom: 3px;
    height: 21px;
  }
`;

const StarIcon = styled.img`
  margin-right: 5px;
  height: 16px;

  @media (max-width: 768px) {
    height: 14px;
    margin-right: 4px;
  }

  @media (max-width: 480px) {
    height: 12px;
    margin-right: 3px;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 2rem;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const StyledButton = styled.button`
  border: 1px solid blue;
  color: blue;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
  }
`;

const NotesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

const Skills = ({ skills }) => {
  return (
    <SkillsContainer>
      <NotesContainer>
        <p>Candidate Skills:</p>
        <BookIcon style={{ marginRight: '8px', height: '20px', position: 'relative', left: '50px' }} />
        <span>Add Notes</span>
      </NotesContainer>

      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            {index === 0 && <StarIcon src={star} alt="Star" />}
            {skill}
          </SkillItem>
        ))}
      </SkillsList>
      <ActionsContainer>
        <StyledButton>Qualify</StyledButton>
        <StyledButton>Reject</StyledButton>
        <StyledButton>On-Hold</StyledButton>
      </ActionsContainer>
    </SkillsContainer>
  );
};

export default Skills;
