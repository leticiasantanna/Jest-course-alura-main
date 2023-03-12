import { realizarSorteio } from "./doSortOfSecretFriend";

describe("sorteio de amigo secreto", () => {
  it("cada participante não pode sortear a si proprio", () => {
    const participants = [
      "Rene",
      "Jones",
      "Leticia",
      "Julia",
      "Taciana",
      "Eduarda",
      "Marlon",
      "Gessi",
    ];

    const sorteio = realizarSorteio(participants);
    participants.forEach((participant) => {
      const amigoSecreto = sorteio.get(participant);
      expect(amigoSecreto).not.toEqual(participant);
    });
  });
});
