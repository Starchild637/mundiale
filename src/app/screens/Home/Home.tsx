import React, { useState } from "react";
import { Content, CardList, Scroll } from "@components";

const Home: React.FC<{ items: Array<Record<string, any>> }> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);
  const handleIndex = (target: string) => {
    const currentIndex = items.findIndex(
      (value: Record<string, any>) => value.id === target
    );
    setIndex(currentIndex);
  };
  return (
    <Content>
      <Scroll
        currentIndex={index}
        onClick={(event: any) => handleIndex(event.target.innerHTML)}
        items={items}
      />
      <CardList record={items[index]} />
    </Content>
  );
};

export default Home;
