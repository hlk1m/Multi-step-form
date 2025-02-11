import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import Step from "../ui/StepList";

const Wrap = styled.nav`
  background-image: url("./src/assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 27%;
  border-radius: 0.8rem;
  height: 100%;
`;

const Box = styled.ol`
  display: flex;
  gap: 1.4rem;
  flex-direction: column;
  padding: 2.5rem 1.8rem;
`;

function Nav() {
  return (
    <Wrap>
      <Box>
        <Step num={1} contents="your info" isActive={true} />
        <Step num={2} contents="select plan" />
        <Step num={3} contents="add-ons" />
        <Step num={4} contents="summary" />
      </Box>
    </Wrap>
  );
}

export default Nav;
