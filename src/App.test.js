import { render } from "@testing-library/react";
import App from "./App";

describe("Basic app structure", () => {
  test("renders 'Country State City' text", () => {
    const { getByText } = render(<App />);
    const element = getByText(/Country State City/);
    expect(element).toBeInTheDocument();
  });

  test("renders 'Countries' text", () => {
    const { getByText } = render(<App />);
    const element = getByText(/Countries/);
    expect(element).toBeInTheDocument();
  });

  test("renders 'Cities' text", () => {
    const { getByText } = render(<App />);
    const element = getByText(/Cities/);
    expect(element).toBeInTheDocument();
  });

  test("renders 'States' text", () => {
    const { getByText } = render(<App />);
    const element = getByText(/States/);
    expect(element).toBeInTheDocument();
  });
});
