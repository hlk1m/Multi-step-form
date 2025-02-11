// UI - Step List
import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

interface IStep {
  num: number;
  contents: string;
  isActive?: boolean;
}

// Style
const List = styled.li`
  display: flex;
  gap: 0.9rem;

  div {
    color: ${colorTheme.white};
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.9rem;

    small {
      font-weight: 300;
      font-size: 0.7rem;
    }
  }
`;

const Num = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${colorTheme.white};
  color: ${colorTheme.white};
  font-size: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActiveNum = styled(Num)`
  background-color: ${colorTheme.lightBlue};
  border: none;
  color: black;
`;

function Step({ num, contents, isActive }: IStep) {
  return (
    <List>
      {isActive ? <ActiveNum>{num}</ActiveNum> : <Num>{num}</Num>}
      <div>
        <small>step {num}</small>
        <p>{contents}</p>
      </div>
    </List>
  );
}

export default Step;
