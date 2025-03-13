import React from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import { useSetAtom } from "jotai";
import { countStep } from "../jotai/atom";
import { useNavigate } from "react-router-dom";

const BtnBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  right: 0%;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const NextBtn = styled.button`
  padding: 0.6rem 0.9rem;
  background-color: ${colorTheme.navy};
  border-radius: 0.3rem;
  color: white;
  font-weight: 500;
`;

const PrevBtn = styled.button`
  color: ${colorTheme.gray};
  font-weight: 600;
`;

interface IBtnProps {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  step: number;
}

function Buttons({ step, onSubmit }: IBtnProps) {
  const setStep = useSetAtom(countStep);
  const navigate = useNavigate();

  const goPrevPage = () => {
    if (step <= 1) {
      return;
    } else if (step === 2) {
      setStep((prev) => prev - 1);
      return navigate(`/`);
    }
    setStep((prev) => prev - 1);
    navigate(`/step${step - 1}`);
  };

  return (
    <BtnBox>
      {step > 4 ? null : (
        <>
          <NextBtn onClick={onSubmit} type="submit">
            Next Step
          </NextBtn>
          {step != 1 && <PrevBtn onClick={goPrevPage}>Go Back</PrevBtn>}
        </>
      )}
    </BtnBox>
  );
}

export default Buttons;
