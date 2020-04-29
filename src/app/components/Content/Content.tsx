import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useHistory } from "react-router-dom";

const Container = styled.div<{ bgConfig?: any }>`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#4cb5e6, #56b49b);
  ${({ bgConfig }) => {
    return (
      bgConfig &&
      `
    background: linear-gradient(
      ${bgConfig.firstColor.color} ${bgConfig.firstColor.start},
      ${bgConfig.firstColor.color} ${bgConfig.firstColor.end},
      ${bgConfig.secondColor.color} ${bgConfig.secondColor.start},
      ${bgConfig.secondColor.color} ${bgConfig.secondColor.end},
      ${bgConfig.thirdColor.color} ${bgConfig.thirdColor.start},
      ${bgConfig.thirdColor.color} ${bgConfig.thirdColor.end}
    );
    `
    );
  }}
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

interface IContent {
  hasHeader?: any;
  bgConfig?: any;
}

const Content: React.FC<IContent> = ({ hasHeader, children, bgConfig }) => {
  const history = useHistory();
  const renderHeader = (hasHeader: boolean) => {
    return hasHeader && <Header onClick={() => history.goBack()} />;
  };
  return (
    <Container bgConfig={bgConfig}>
      {renderHeader(hasHeader)}
      {children}
    </Container>
  );
};

export default Content;
