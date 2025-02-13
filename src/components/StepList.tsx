// UI - Step List
import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { countStep } from "../jotai/atom";

interface IStep {
  num: number;
  contents: string;
}

// Style
const List = styled.li`
  display: flex;
  gap: 0.9rem;
  cursor: pointer;

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
  const navigate = useNavigate();
  const [step, setStep] = useAtom(countStep);
  const onGoTo = () => {
    setStep(num);
    navigate(`/step${step}`);
  };

  return (
    <List onClick={onGoTo}>
      {step === num ? <ActiveNum>{num}</ActiveNum> : <Num>{num}</Num>}
      <div>
        <small>step {num}</small>
        <p>{contents}</p>
      </div>
    </List>
  );
}

export default Step;
