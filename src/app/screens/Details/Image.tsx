import React from "react";
import styled from "styled-components";

const Container = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 180px;
  object-fit: cover;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.5);
`;

const Image: React.FC<{ image: any }> = ({ image }) => {
  return <Container src={image} />;
};

export default Image;
