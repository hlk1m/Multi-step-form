import React, { ChangeEvent, FormEvent, useState } from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

interface IForm {
  online: string;
  storage: string;
  profile: string;
}

// Style
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    display: none;
  }
`;
const Label = styled.label<{ isActive: boolean }>`
  cursor: pointer;
  display: grid;
  grid-template-columns: 7% 80% 13%;
  background-color: ${(p) =>
    p.isActive ? colorTheme.veryLightGray : "transparent"};
  border-radius: 8px;

  border: 1px solid
    ${(p) => (p.isActive ? colorTheme.blue : colorTheme.lightGray)};

  padding: 1rem;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border: 1px solid ${colorTheme.lightGray};
    border-radius: 4px;
    background-color: ${(p) => (p.isActive ? colorTheme.blue : "transparent")};

    img {
      width: 75%;
    }
  }

  p {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${colorTheme.navy};
    small {
      margin-top: 0.3rem;
      color: ${colorTheme.gray};
      font-size: 0.75rem;

      display: block;
    }
  }

  span {
    font-size: 0.8rem;
    color: ${colorTheme.blue};
  }
`;

function Three() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [data, setData] = useState<IForm>({
    online: "",
    storage: "",
    profile: "",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <section>
      <Heading
        title="Pick add-ons"
        content="Add-ons help enhance your gaming experience."
      />
      <Form onSubmit={onSubmit}>
        <Label htmlFor="online" isActive={true}>
          <div>
            <img
              src="./src/assets/images/icon-checkmark.svg"
              alt="check mark"
            />
          </div>
          <p>
            Online service
            <small>Access to multiplayer games</small>
          </p>
          <span>+$1/mo</span>
        </Label>
        <input type="checkbox" id="online" name="step3" onChange={onChange} />
        <Label htmlFor="storage" isActive={isActive}>
          <div>
            <img
              src="./src/assets/images/icon-checkmark.svg"
              alt="check mark"
            />
          </div>
          <p>
            Larger storage
            <small>Extra 1TB of cloud save</small>
          </p>
          <span>+$2/mo</span>
        </Label>
        <input type="checkbox" id="storage" name="step3" onChange={onChange} />
        <Label htmlFor="profile" isActive={isActive}>
          <div>
            <img
              src="./src/assets/images/icon-checkmark.svg"
              alt="check mark"
            />
          </div>
          <p>
            Customizable Profile
            <small>Custom theme on your profile</small>
          </p>
          <span>+$2/mo</span>
        </Label>
        <input type="checkbox" id="profile" name="step3" onChange={onChange} />
      </Form>
    </section>
  );
}

export default Three;
