import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from "./Configs";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});
describe("page of configs", () => {
  it("must be render conrrectly", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
