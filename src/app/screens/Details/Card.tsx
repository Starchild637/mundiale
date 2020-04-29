import React from "react";
import styled from "styled-components";
import Text from "./Text";
import { Ruler, Mundiale } from "@assets/svg";
import { Row, Group } from "@components";

const Container = styled.div`
  width: 80%;
  height: 180px;
  display: flex;
  flex-direction: column;
  background-color: #405364;
  border-radius: 12px;
  justify-content: space-between;
  box-shadow: 2px 0 1px 0px rgba(0, 0, 0, 0.3);
`;
const PhoneContainer = styled.div`
  width: 50%;
  height: 60px;
  border-left: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const SvgContainer = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card: React.FC<{}> = () => {
  return (
    <Container>
      <Group />
      <Group>
        <Row>
          <SvgContainer>
            <Mundiale />
          </SvgContainer>
          <PhoneContainer>
            <Text style={{ margin: 0, marginLeft: 10 }} size={15}>
              99 | 99999-9999
            </Text>
            <Text style={{ margin: 0, marginLeft: 10 }} size={15}>
              99 | 9999-9999
            </Text>
          </PhoneContainer>
        </Row>
      </Group>
      <Text style={{ alignSelf: "center", margin: 0 }} size={15} weight="bold">
        email@example.com
      </Text>
      <SvgContainer style={{ width: "100%", height: 32 }}>
        <Ruler />
      </SvgContainer>
    </Container>
  );
};

export default Card;
