import { useSetRecoilState, useRecoilValue } from "recoil";
import { errorState, participantsListState } from "../atom";

export const AddParticipants = () => {
  const setList = useSetRecoilState(participantsListState);
  const list = useRecoilValue(participantsListState);
  const setError = useSetRecoilState(errorState);
  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError("Não é permitido nome duplicado!");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    return setList((actualList) => [...actualList, participantName]);
  };
};
