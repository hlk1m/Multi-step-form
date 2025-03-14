// Step 2 Page

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import Buttons from "../components/Buttons";
import { useAtom, useSetAtom } from "jotai";
import { countStep, formData, isYearly } from "../jotai/atom";
import { useNavigate } from "react-router-dom";
import { FormWrap } from "./One";

// Style
const Form = styled.form`
  display: flex;
  gap: 4%;
  width: 100%;

  input {
    display: none;
  }
`;

const Label = styled.label<{ ischecked: boolean }>`
  cursor: pointer;
  width: 33%;
  height: 23vh;
  border-radius: 8px;
  border: 2px solid
    ${({ ischecked }) => (ischecked ? colorTheme.blue : colorTheme.lightGray)};
  background-color: ${({ ischecked }) =>
    ischecked ? colorTheme.veryLightGray : colorTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.8rem;
  font-weight: 500;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid ${colorTheme.blue};
  }

  img {
    width: 25%;
  }
  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${colorTheme.navy};
    }
    small {
      color: ${colorTheme.gray};
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }

    p {
      font-size: 0.8rem;
      color: ${colorTheme.navy};
    }
  }
`;

const Btns = styled.div`
  margin-top: 2rem;
  background-color: ${colorTheme.veryLightGray};
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;
const Btn = styled.button<{ isyearly: boolean }>`
  cursor: pointer;
  font-weight: 500;
  color: ${({ isyearly }) => (isyearly ? colorTheme.gray : colorTheme.navy)};
  font-size: 0.8rem;
`;

const ToggleBtn = styled.div<{ isyearly: boolean }>`
  width: 2.5rem;
  height: 1.15rem;
  background-color: ${colorTheme.navy};
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 1rem;

  span {
    width: 16px;
    height: 16px;
    background-color: ${colorTheme.white};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
      ${({ isyearly }) => (isyearly ? "translateX(150%)" : "translateX(0)")};
    transition: transform 0.25s ease;
    left: 4px;
  }
`;

const price = {
  yealy: {
    arcade: "90",
    advanced: "120",
    pro: "150",
  },
  monthly: {
    arcade: "",
    advanced: "",
    pro: "",
  },
};

function Two() {
  const [data, setData] = useState<string>("arcade");

  const [isYearlyData, setIsYearly] = useAtom(isYearly);
  const setFormData = useSetAtom(formData);

  const setStep = useSetAtom(countStep);
  const navigation = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { id },
    } = e;
    setData(id);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      plan: data,
    }));
    console.log(formData);
    setStep(3);
    navigation("/step3");
  };

  const onToggle = () => setIsYearly((prev) => !prev);
  const onToggleYearly = (value: boolean) => setIsYearly(value);

  useEffect(() => {
    console.log(isYearlyData);
  }, [isYearlyData]);

  return (
    <FormWrap>
      <Heading
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />

      <Form onSubmit={onSubmit}>
        <Label htmlFor="arcade" ischecked={data === "arcade" ? true : false}>
          <img
            src="./src/assets/images/icon-arcade.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Arcade</span>
            <small>$9/mo</small>
            {isYearlyData ? <p>2 months free</p> : null}
          </div>
        </Label>
        <input type="radio" id="arcade" name="step2" onChange={onChange} />
        <Label
          htmlFor="advanced"
          ischecked={data === "advanced" ? true : false}
        >
          <img
            src="./src/assets/images/icon-advanced.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Advanced</span>
            <small>$12/mo</small>
            {isYearlyData ? <p>2 months free</p> : null}
          </div>
        </Label>
        <input type="radio" id="advanced" name="step2" onChange={onChange} />
        <Label htmlFor="pro" ischecked={data === "pro" ? true : false}>
          <img
            src="./src/assets/images/icon-pro.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Pro</span>
            <small>$15/mo</small>
            {isYearlyData ? <p>2 months free</p> : null}
          </div>
        </Label>
        <input type="radio" id="pro" name="step2" onChange={onChange} />
      </Form>
      <Btns>
        <Btn onClick={() => onToggleYearly(false)} isyearly={isYearlyData}>
          Monthly
        </Btn>
        <ToggleBtn isyearly={isYearlyData} onClick={onToggle}>
          <span></span>
        </ToggleBtn>
        <Btn onClick={() => onToggleYearly(true)} isyearly={!isYearlyData}>
          Yearly
        </Btn>
      </Btns>
      <Buttons onSubmit={onSubmit} step={2} />
    </FormWrap>
  );
}

export default Two;
