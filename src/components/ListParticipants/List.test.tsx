import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantList from ".";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";

jest.mock("../../state/hooks/listOfParticipants", () => {
  return {
    ListOfParticipants: jest.fn(),
  };
});

describe("List Test", () => {
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue([]);
  });
  it("must render an empty list", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("fill List", () => {
  const participants = ["Marilia", "João"];
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue(participants);
  });
  it.skip("must render an fill list", () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
    //tentar verificar esse teste posteriormente
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participants.length);
  });
});
