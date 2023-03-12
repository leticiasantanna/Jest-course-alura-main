import { useState } from "react";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";
import { useResultOfSort } from "../../state/hooks/useResultOfSort";

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const participants = ListOfParticipants();
  const restultado = useResultOfSort();
  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (restultado.has(participanteDaVez)) {
      setAmigoSecreto(restultado.get(participanteDaVez)!);
    }
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="selecione seu nome"
          value={participanteDaVez}
          onChange={(event) => setParticipanteDaVez(event.target.value)}
          required
        >
          {participants.map((participant): any => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};

export default Sorteio;
