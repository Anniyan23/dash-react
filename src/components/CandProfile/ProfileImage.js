import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  position:relative;
  left:-10%;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage = ({ src }) => {
  return (
    <ImageContainer>
      <img src={src} alt="Profile" />
    </ImageContainer>
  );
};

export default ProfileImage;
