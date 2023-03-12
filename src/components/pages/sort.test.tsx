import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";
import Sort from "./Sort";

jest.mock("../../state/hooks/listOfParticipants", () => {
  return {
    ListOfParticipants: jest.fn(),
  };
});
describe("sort page", () => {
  const participantes = ["Leticia", "Taciana", "Eduarda"];
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue(participantes);
  });
  it("all participants can show your secret friend", () => {
    render(
      <RecoilRoot>
        <Sort />
      </RecoilRoot>
    );

    const option = screen.queryAllByRole("option");
    expect(option).toHaveLength(participantes.length);
  });
});
