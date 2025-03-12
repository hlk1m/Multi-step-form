// UI - Step List
import React, { useEffect } from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import { useAtom, useAtomValue } from "jotai";
import { countStep } from "../jotai/atom";
import { useLocation } from "react-router-dom";

interface IStep {
  num: number;
  contents: string;
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

    p {
      font-size: 0.8rem;
      letter-spacing: 1.5px;
    }
    small {
      font-weight: 300;
      color: ${colorTheme.lightGray};
      font-size: 0.7rem;
    }
  }
`;

const Num = styled.span`
  width: 1.9rem;
  height: 1.9rem;
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

function Step({ num, contents }: IStep) {
  const [step, setStep] = useAtom(countStep);
  const location = useLocation();

  const path = location.pathname;

  // Step과 현재 path를 일치시키기
  useEffect(() => {
    if (path === "/") {
      return setStep(1);
    } else if (path !== "/step" + step) {
      const pathNum = path.slice(-1);
      return setStep(Number(pathNum));
    }
  }, [location, step]);

  return (
    <List>
      {step === num ? <ActiveNum>{num}</ActiveNum> : <Num>{num}</Num>}
      <div>
        <small>step {num}</small>
        <p>{contents}</p>
      </div>
    </List>
  );
}

export default Step;
