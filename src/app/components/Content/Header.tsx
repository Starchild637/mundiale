import React from "react";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";

const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButtonContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Container>
      <BackButtonContainer onClick={onClick}>
        <FaChevronLeft color="#FFF" />
      </BackButtonContainer>
    </Container>
  );
};

export default Header;
