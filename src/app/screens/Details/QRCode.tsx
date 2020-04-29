import React from "react";
import styled from "styled-components";
import { QRCode as Code } from "react-qr-svg";

const Container = styled.div`
  width: 190px;
  height: 180px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const QRCode: React.FC<{ data: string }> = ({ data }) => {
  return (
    <Container>
      <Code
        bgColor="#FFF"
        fgColor="#000"
        value={data}
        style={{ width: 160, height: 150 }}
      />
    </Container>
  );
};

export default QRCode;
