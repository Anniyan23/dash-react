import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.8em;
  position: relative;
  bottom: 15px;
  right: 30px;

   @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 6px;
  }
`;

const DetailItem = styled.p`
  margin: 4px 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 3px 0;
  }

  @media (max-width: 480px) {
    margin: 2px 0;
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  margin-left: 10px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 3px;
    margin-left: 8px;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    margin-right: 2px;
    margin-left: 6px;
    margin-bottom: 3px;
  }
`;

const CandidateDetails = ({ name, role, email, phone }) => {
  return (
    <DetailsContainer>
      <DetailItem>
        {name}
        <Icon src="https://img.icons8.com/color/48/verified-badge.png" alt="verified-badge" />
      </DetailItem>
      <DetailItem>{role}</DetailItem>
      <DetailItem>
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/ios-glyphs/30/new-post.png"
          alt="new-post"
        />
        {email}
      </DetailItem>
      <DetailItem>
        <img
          width="10"
          height="10"
          src="https://img.icons8.com/ios-filled/50/phone.png"
          alt="phone"
        />
        {phone}
      </DetailItem>
      <a href='https://drive.google.com/file/d/1ql6HPn7PPZVab3mJ2PSiLquioQ1sU9aN/view?usp=drive_link'>View Resume</a>
    </DetailsContainer>
  );
};

export default CandidateDetails;
