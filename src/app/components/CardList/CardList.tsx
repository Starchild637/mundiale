import React from "react";
import styled from "styled-components";
import EmptyCard from "./EmptyCard";
import Card from "./Card";
import ListItem from "./ListItem";

interface ICardList {
  record: Record<string, any>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 30px;
`;

const List = styled.ul`
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  display: block;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
`;

const CardList: React.FC<ICardList> = ({ record }) => {
  const { slots } = record;
  const renderEmptySlots = (slots: number) => {
    const emptySlots = [];
    for (let i = 0; i < slots; i++) {
      emptySlots.push(i);
    }
    return emptySlots.map((slot: number) => {
      return (
        <ListItem key={slot}>
          <EmptyCard key={slot} />
        </ListItem>
      );
    });
  };
  return (
    <Container>
      <List>
        <ListItem>
          <Card profile={record} />
        </ListItem>
        {renderEmptySlots(slots)}
      </List>
    </Container>
  );
};

export default CardList;
