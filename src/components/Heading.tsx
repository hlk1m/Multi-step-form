import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

const Wrap = styled.div`
  margin-bottom: 1.8rem;
  h1 {
    color: ${colorTheme.navy};
    font-size: 1.9rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 0.8rem;
    color: ${colorTheme.gray};
    font-size: 0.9rem;
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
