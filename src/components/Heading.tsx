import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

const Wrap = styled.div`
  h1 {
    color: ${colorTheme.navy};
  }
`;

function Heading({ title, content }) {
  return (
    <Wrap>
      <h1>{title}</h1>
      <h2>{content}</h2>
    </Wrap>
  );
}

export default Heading;
