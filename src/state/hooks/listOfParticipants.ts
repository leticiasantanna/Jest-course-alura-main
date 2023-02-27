import { useRecoilValue } from "recoil"
import { participantsListState } from "../atom"

export const ListOfParticipants = () => {
    return useRecoilValue(participantsListState)
}