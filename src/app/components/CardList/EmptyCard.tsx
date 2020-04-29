import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
`;
const EmptyCard: React.FC<{}> = () => {
  return <Container />;
};

export default EmptyCard;
