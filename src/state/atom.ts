import { atom } from "recoil";

export const participantsListState = atom<String[]>({
  key: "participantsListState",
  default: [],
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
