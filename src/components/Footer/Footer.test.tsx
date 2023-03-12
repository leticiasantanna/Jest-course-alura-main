import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { ListOfParticipants } from "../../state/hooks/listOfParticipants";

jest.mock("../../state/hooks/listOfParticipants", () => {
  return {
    ListOfParticipants: jest.fn(),
  };
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("There is no participants to init the game", () => {
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue([]);
  });
  test("the game cant be init", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});

describe("There is participants enough", () => {
  beforeEach(() => {
    (ListOfParticipants as jest.Mock).mockReturnValue([
      "Julia, Maria, Alfredo",
    ]);
  });
  it.skip("the game can init", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  it.skip("the game inited", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sorteio");
  });
});
