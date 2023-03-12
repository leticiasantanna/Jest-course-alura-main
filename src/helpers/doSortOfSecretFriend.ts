import shuffle from "just-shuffle"

export function realizarSorteio(participantes: string[]) {
    const totalOfParticipants = participantes.length
    const embaralhar = shuffle(participantes)

    const result = new Map<string, string>()
    for (let index = 0; index <totalOfParticipants; index++){
        const indiceOfFriend = index ===(totalOfParticipants - 1) ? 0 : index + 1
        result.set(embaralhar[index], embaralhar[indiceOfFriend])
    }

    return(result)
}