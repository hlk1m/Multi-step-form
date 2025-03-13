// Step 1 Page

import React from "react";
import Heading from "../components/Heading";
import styled from "styled-components";
import { colorTheme } from "../styles/colorTheme";
import Buttons from "../components/Buttons";
import { useSetAtom } from "jotai";
import { countStep, formData, IFormData } from "../jotai/atom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  phone: string;
}

export const FormWrap = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
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

const Input = styled.input<{ errormessages: string | undefined }>`
  margin-top: 0.6rem;
  margin-bottom: 1rem;
  padding: 0.7rem;
  border: 1px solid ${colorTheme.lightGray};
  border-radius: 5px;

  outline-color: ${(p) => (p.errormessages ? colorTheme.red : colorTheme.blue)};
`;

export const ErrorTxt = styled.p`
  color: ${colorTheme.red};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

function One() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const setFormData = useSetAtom(formData);
  const setStep = useSetAtom(countStep);
  const navigation = useNavigate();

  const onSubmit = (data: IFormData) => {
    setFormData(data);

    setStep(2);
    navigation("/step2");
  };

  return (
    <FormWrap>
      <div>
        <Heading
          title="Personal info"
          content="Please provide your name, email address, and phone number."
        />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <Input
            errormessages={errors.name?.message}
            id="name"
            {...register("name", {
              required: "이름을 입력해주세요.",
              minLength: { value: 2, message: "두 글자 이상 입력해주세요." },
            })}
            placeholder="e.g. Stephen King"
          />
          {errors.name && <ErrorTxt>{errors.name.message}</ErrorTxt>}
          <label htmlFor="email">Email Address</label>
          <Input
            errormessages={errors.email?.message}
            type="email"
            id="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "유효한 이메일이 아닙니다.",
              },
            })}
            placeholder="e.g. stephenking@lorem.com"
          />
          {errors.email && <ErrorTxt>{errors.email.message}</ErrorTxt>}
          <label htmlFor="phone">Phone Number</label>
          <Input
            errormessages={errors.phone?.message}
            type="number"
            id="phone"
            {...register("phone", {
              required: "전화번호를 입력해주세요.",
              minLength: {
                value: 9,
                message: "전화번호 11자리를 입력해주세요.",
              },
            })}
            placeholder="e.g. +1 234 567 890"
          />
          {errors.phone && <ErrorTxt>{errors.phone.message}</ErrorTxt>}
        </Form>
      </div>
      <Buttons step={1} onSubmit={handleSubmit(onSubmit)} />
    </FormWrap>
  );
}

export default One;
