import { ListOfParticipants } from "../../state/hooks/listOfParticipants";

const ParticipantList = () => {
  const participants: string[] = ListOfParticipants();

  return (
    <ul>
      {participants.map((participant) => {
        <li key={participant}>{participant}</li>;
      })}
    </ul>
  );
};

export default ParticipantList;
