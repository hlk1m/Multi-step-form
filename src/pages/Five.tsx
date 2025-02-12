import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;

  img {
    width: 12%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colorTheme.navy};
    margin: 1.2rem 0;
  }

  p {
    width: 90%;
    font-size: 0.8rem;
    color: ${colorTheme.gray};
    line-height: 1.6;
  }
`;

function Five() {
  return (
    <Wrap>
      <img src="./src/assets/images/icon-thank-you.svg" alt="thank you image" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Wrap>
  );
}

export default Five;
