// Jotai

import { atom } from "jotai";

export const countStep = atom<number>(1);

export const isYearly = atom(false);

export interface IFormData {
  name?: string;
  email?: string;
  phone?: string;
  plan?: string;
  add?: string;
  total?: string;
}

export const formData = atom<IFormData>({
  name: "",
  email: "",
  phone: "",
  plan: "",
  add: "",
  total: "",
});
