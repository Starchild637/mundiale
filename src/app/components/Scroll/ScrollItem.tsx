import React from "react";
import styled from "styled-components";

interface IScrollItem {
  onClick: () => void;
  children: any;
}

const Container = styled.div`
  width: 75px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 36px;
  text-weight: bold;
`;
const ScrollItem: React.FC<IScrollItem> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default ScrollItem;
