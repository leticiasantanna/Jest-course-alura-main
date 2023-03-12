import { useSetRecoilState } from "recoil"
import { realizarSorteio } from "../../helpers/doSortOfSecretFriend"
import { resultOfSecretFriend } from "../atom"
import { ListOfParticipants } from "./listOfParticipants"

export const useSort = () => {
    const participants = ListOfParticipants()
    const setResult = useSetRecoilState(resultOfSecretFriend)

    return () => {
     const resultado = realizarSorteio(participants)
        setResult(resultado)
    }
}