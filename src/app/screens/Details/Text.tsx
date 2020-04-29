import React from "react";
import styled from "styled-components";

const Text = styled.p<{ size?: number; weight?: string }>`
  text-align: left;
  color: #fff;
  font-size: ${({ size = 12 }) => size}px;
  font-weight: ${({ weight = "normal" }) => weight};
`;
export default Text;
