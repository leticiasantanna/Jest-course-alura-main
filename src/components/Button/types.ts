import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonEnum;
  maxWidth?: number;
  minWidth?: number;
}

export interface IContainerProps {
  variant?: ButtonEnum;
  maxWidth?: number;
  minWidth?: number;
}

export enum ButtonEnum {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}
