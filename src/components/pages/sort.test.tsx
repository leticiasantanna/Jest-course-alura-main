import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";
import { useResultOfSort } from "../../state/hooks/useResultOfSort";
import Sorteio from "./Sort";

jest.mock("../../state/hooks/listOfParticipants", () => {
  return {
    ListOfParticipants: jest.fn(),
  };
});

jest.mock("../../state/hooks/useResultOfSort", () => {
  return {
    useResultOfSort: jest.fn(),
  };
});
describe("sort page", () => {
  const participantes = ["Leticia", "Taciana", "Eduarda"];

  const resultado = new Map([
    ["Leticia", "Taciana"],
    ["Eduarda", "Leticia"],
    ["Taciana", "Eduarda"],
  ]);
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue(participantes);
    (useResultOfSort as jest.Mock).mockReturnValue(resultado);
  });
  it("all participants can show your secret friend", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const option = screen.queryAllByRole("option");
    expect(option).toHaveLength(participantes.length);
  });

  it("the secret friend is showed when requested", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("selecione seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
