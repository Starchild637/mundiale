import React from "react";
import styled from "styled-components";
import Male from "@assets/images/male_avatar.jpg";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.3);
`;
const Image = styled.img`
  max-width: 25%;
  min-width: 25%;
  object-fit: cover;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;
const Details = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`;
const Name = styled.p`
  margin: 0;
  color: #aaa;
  font-size: 20px;
`;
const Job = styled.p`
  margin: 0;
  color: #ccc;
  font-size: 15px;
`;
const Button = styled.div`
  height: 70%;
  width: 15%;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border: none;
  border-left: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 24px;
`;

interface ICard {
  profile: Record<string, any>;
}

const Card: React.FC<ICard> = ({ profile }) => {
  const history = useHistory();
  const { name, job, image } = profile;
  return (
    <Container onClick={() => history.push("/details", profile)}>
      <Image src={image} />
      <Details>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </Details>
      <Button>+</Button>
    </Container>
  );
};

export default Card;
