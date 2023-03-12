import { atom } from "recoil";

export const participantsListState = atom<string[]>({
  key: "participantsListState",
  default: [],
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

export const resultOfSecretFriend = atom<Map<string,string>>({
  key: 'resultOfSecretFriend',
  default: new Map()
})
