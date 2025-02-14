import React, { ChangeEvent, FormEvent, useState } from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import Buttons from "../components/Buttons";

interface IForm {
  name: string;
  email: string;
  phone: string;
}

export const FormWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.7rem;
    font-weight: 500;
    color: ${colorTheme.navy};
  }
  input {
    margin-top: 0.6rem;
    margin-bottom: 1rem;
    padding: 0.7rem;
    border: 1px solid ${colorTheme.lightGray};
    border-radius: 5px;
  }
  input::placeholder {
    font-weight: 500;
    font-family: "Ubuntu";
    color: ${colorTheme.gray};
  }
`;

function One() {
  const [data, setData] = useState<IForm>({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <FormWrap>
      <div>
        <Heading
          title="Personal info"
          content="Please provide your name, email address, and phone number."
        />
        <Form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={onChange}
            placeholder="e.g. Stephen King"
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            onChange={onChange}
            placeholder="e.g. stephenking@lorem.com"
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            onChange={onChange}
            placeholder="e.g. +1 234 567 890"
          />
        </Form>
      </div>
      <Buttons data={data} />
    </FormWrap>
  );
}

export default One;
