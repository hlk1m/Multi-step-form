import React, { useEffect } from "react";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import { useAtom, useSetAtom } from "jotai";
import { countStep, formData } from "../jotai/atom";
import { useLocation, useNavigate } from "react-router-dom";

const BtnBox = styled.div`
  width: 100%;
  bottom: 2rem;
  display: flex;
  justify-content: space-between;
  /* flex-direction: row-reverse; */
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

function Buttons({ formRef, type, goTo, data }) {
  const [step, setStep] = useAtom(countStep);
  const setData = useSetAtom(formData);
  const navigate = useNavigate();

  const location = useLocation();

  // useEffect(() => {
  //   if (step === 1) return;
  //   navigate(`/step${step}`);
  // }, [step]);

  const onClick = () => {
    switch (type) {
      case "step4":
        return navigate(`/step${step}`);
    }
    if (type === "step4") {
      return navigate(`/step${step}`);
    }
    // 폼을 제출하고 onSubmit을 호출
    formRef.current.submit();

    if (type === "step1") {
      setData(data);
    } else if (type === "step2") {
      setData(data);
    } else if (type === "step3") {
      setData(data);
    } else {
      setData(data);
    }

    navigate(`/step${step}`);
  };

  const goNextPage = () => {
    // 데이터 아톰에 저장하기
    if (step >= 5) return;

    setStep(goTo);
  };

  const goPrevPage = () => {
    if (step <= 1) return;
    setStep((prev) => prev - 1);
  };

  return (
    <BtnBox>
      {step > 4 ? null : (
        <>
          <button></button>
          <NextBtn onClick={onClick}>Next Step</NextBtn>
          {step != 1 && <PrevBtn onClick={goPrevPage}>Go Back</PrevBtn>}
        </>
      )}
    </BtnBox>
  );
}

export default Buttons;
