import * as Styles from "./styles";
import { ButtonEnum, IButtonProps } from "./types";

const Button = ({
  title,
  maxWidth,
  minWidth,
  variant = ButtonEnum.Primary,
  ...rest
}: IButtonProps) => {
  return (
    <Styles.Container
      maxWidth={maxWidth}
      minWidth={minWidth}
      disabled={rest.disabled}
      className={`${rest.className} ${variant}`}
      {...rest}
    >
      <p>{title}</p>
    </Styles.Container>
  );
};

export default Button;
