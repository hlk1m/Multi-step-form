import React, { ChangeEvent, FormEvent, useState } from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

const data = {};
interface IForm {
  arcade: string;
  advanced: string;
  pro: string;
}

// Style
const Form = styled.form`
  display: flex;
  gap: 4%;
  width: 100%;

  input {
    display: none;
  }
`;

const Label = styled.label`
  width: 33%;
  height: 25vh;
  border-radius: 8px;
  border: 2px solid ${colorTheme.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0.8rem;
  font-weight: 500;

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
  }
`;

const Btns = styled.div`
  margin-top: 2rem;
  background-color: ${colorTheme.veryLightGray};
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;

  button {
    font-weight: 500;
    color: ${colorTheme.gray};
    font-size: 0.8rem;
  }
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

  &::after {
    content: "";
    width: 0.78rem;
    height: 0.78rem;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 4px;
    transition: left 0.3s ease;
  }
`;

function Two() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [data, setData] = useState<IForm>({
    arcade: "",
    advanced: "",
    pro: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {};

  const onToggleYearly = () => setIsYearly((prev) => !prev);
  return (
    <section>
      <Heading
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />

      <Form onSubmit={onSubmit}>
        <Label htmlFor="arcade">
          <img
            src="./src/assets/images/icon-arcade.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Arcade</span>
            <small>$9/mo</small>
          </div>
        </Label>
        <input type="radio" id="arcade" name="step2" onChange={onChange} />
        <Label htmlFor="advanced">
          <img
            src="./src/assets/images/icon-advanced.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Advanced</span>
            <small>$12/mo</small>
          </div>
        </Label>
        <input type="radio" id="advanced" name="step2" onChange={onChange} />
        <Label htmlFor="pro">
          <img
            src="./src/assets/images/icon-pro.svg"
            alt="radio button thumnail"
          />
          <div>
            <span>Pro</span>
            <small>$15/mo</small>
          </div>
        </Label>
        <input type="radio" id="pro" name="step2" onChange={onChange} />
      </Form>
      <Btns>
        <button onClick={onToggleYearly}>Monthly</button>
        <ToggleBtn isyearly={isYearly}></ToggleBtn>
        <button onClick={onToggleYearly}>Yearly</button>
      </Btns>
    </section>
  );
}

export default Two;
