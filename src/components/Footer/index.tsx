import { useNavigate } from "react-router-dom";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";

const Footer = () => {
  const participants = ListOfParticipants();

  const navigateTo = useNavigate();

  const init = () => {
    navigateTo("/sorteio");
  };
  return (
    <footer>
      <button disabled={participants.length < 3} onClick={init}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
