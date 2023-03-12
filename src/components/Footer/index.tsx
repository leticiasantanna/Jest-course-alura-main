import { useNavigate } from "react-router-dom";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";
import { useSort } from "../../state/hooks/useSort";

const Footer = () => {
  const participants = ListOfParticipants();

  const navigateTo = useNavigate();

  const sortear = useSort();
  const init = () => {
    sortear();
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
