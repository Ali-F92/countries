import { atom } from "recoil";

export const countryNameState = atom<string>({
  key: "countryName",
  default: "",
});
