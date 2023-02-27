import logo from "../../assets/logo.png";
import participant from "../../assets/participante.png";
import Form from "../../components/Form";

import * as Styles from "../../styles/pages/sort";

const Sort = () => {
  return (
    <>
      <Styles.Container>
        <img src={logo} alt="logo" />
        <img src={participant} alt="logo" />
      </Styles.Container>
      <Styles.Content>
        <Form />
      </Styles.Content>
    </>
  );
};

export default Sort;
