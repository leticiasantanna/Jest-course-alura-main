import { useRecoilValue } from "recoil"
import { resultOfSecretFriend } from "../atom"

export const useResultOfSort =() => {
    return useRecoilValue(resultOfSecretFriend)
}