import React, { ChangeEvent, FormEvent, useState } from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";

interface IForm {
  name: string;
  email: string;
  phone: string;
}

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <section>
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
    </section>
  );
}

export default One;
