import { atom } from "recoil";

export const users = atom({
  key: "users atom",
  default: [],
});
