import { ListOfParticipants } from "../../state/hooks/listOfParticipants";

const Sort = () => {
  const participants = ListOfParticipants();

  return (
    <section>
      <select name="participanteDaVez" id="participanteDaVez">
        {participants.map((participant): any => (
          <option key={participant}>{participant}</option>
        ))}
      </select>
    </section>
  );
};

export default Sort;
