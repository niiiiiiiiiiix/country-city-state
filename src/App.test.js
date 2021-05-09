import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Countries from "./components/Countries";

describe("Basic app structure", () => {
  it("should render 'Country State City' text", () => {
    render(<App />);
    const element = screen.getByText("Country State City");
    expect(element).toBeInTheDocument();
  });

  it("should render 'Countries' text", () => {
    render(<App />);
    const element = screen.getByText("Countries");
    expect(element).toBeInTheDocument();
  });

  it("should render 'Cities' text", () => {
    render(<App />);
    const element = screen.getByText("Cities");
    expect(element).toBeInTheDocument();
  });

  it("should render 'States' text", () => {
    render(<App />);
    const element = screen.getByText("States");
    expect(element).toBeInTheDocument();
  });
});

describe("Countries structure", () => {
  beforeEach(() => {
    render(<Countries />);
  });

  it("should render all 247 countries by default", async () => {
    const items = await screen.findAllByRole("list");
    expect(items).toHaveLength(250);
  });

  it("verify input is correct", () => {
    const input = screen.getByLabelText("country-search");
    fireEvent.change(input, { target: { value: "Singapore" } });
    expect(input.value).toBe("Singapore");
  });

  it("should return only Singapore if user searches for Singapore", async () => {
    const input = screen.getByLabelText("country-search");
    fireEvent.change(input, { target: { value: "Singapore" } });
    const items = await screen.findAllByRole("list");
    expect(items).toHaveLength(1);
  });
});
