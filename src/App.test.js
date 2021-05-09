import { render, screen } from "@testing-library/react";
import App from "./App";
import Countries from "./components/Countries";

describe("Basic app structure", () => {
  test("renders 'Country State City' text", () => {
    render(<App />);
    const element = screen.getByText("Country State City");
    expect(element).toBeInTheDocument();
  });

  test("renders 'Countries' text", () => {
    render(<App />);
    const element = screen.getByText("Countries");
    expect(element).toBeInTheDocument();
  });

  test("renders 'Cities' text", () => {
    render(<App />);
    const element = screen.getByText("Cities");
    expect(element).toBeInTheDocument();
  });

  test("renders 'States' text", () => {
    render(<App />);
    const element = screen.getByText("States");
    expect(element).toBeInTheDocument();
  });
});

describe("Countries structure", () => {
  test("renders all 247 countries", async () => {
    render(<Countries />);
    const items = await screen.findAllByRole("list");
    expect(items).toHaveLength(250);
  });
});
