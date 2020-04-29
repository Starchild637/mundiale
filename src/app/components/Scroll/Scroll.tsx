import React from "react";
import styled from "styled-components";
import { Frame } from "@assets/svg";
import ScrollItem from "./ScrollItem";

interface IScroll {
  items: Array<Record<string, any>>;
  onClick: (argument?: any) => void;
  currentIndex: number;
}

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 200px;
`;
const Scrollable = styled.div<{ currentIndex: number }>`
  position: absolute;
  left: ${({ currentIndex }) => 375 / 2 - 37 - currentIndex * 75}px;
  height: 70px;
  width: 2000px;
  bottom: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.3s ease;
`;
const Scroll: React.FC<IScroll> = ({ items, onClick, currentIndex }) => {
  return (
    <Container>
      <Frame />
      <Scrollable currentIndex={currentIndex}>
        {items.map((item: Record<string, any>) => {
          return (
            <ScrollItem onClick={onClick} key={item.id}>
              {item.id}
            </ScrollItem>
          );
        })}
      </Scrollable>
    </Container>
  );
};

export default Scroll;
