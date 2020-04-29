import React from "react";
import styled from "styled-components";

const ListItemContainer = styled.div`
  min-height: 80px;
  align-items: center;
  width: 100%;
  height: 80px;
  list-style: none;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  list-style: none;
  font-size: 30px;
  margin: 10px;
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const ListItem: React.FC<{}> = ({ children }) => {
  return (
    <ListItemContainer>
      <Bullet />
      <Content>{children}</Content>
    </ListItemContainer>
  );
};

export default ListItem;
