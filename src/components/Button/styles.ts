import styled from "styled-components";
import { lighten } from "polished";
import { ButtonEnum, IContainerProps } from "./types";

export const Container = styled.button<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-height: 40px;
  min-height: 40px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  min-width: ${({ minWidth }) => minWidth}px;

  cursor: pointer;

  &.${ButtonEnum.Primary} {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    box-shadow: 4px 4px 0px #000000;

    &:hover:enabled {
      background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  &.${ButtonEnum.Secondary} {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    box-shadow: 4px 4px 0px #000000;

    &:hover:enabled {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  font-size: 0.85rem;
  font-weight: normal;

  padding: 10px 12px;

  border-radius: 20px;

  transition: 0.2s ease;

  p {
    width: fit-content;
  }
`;
