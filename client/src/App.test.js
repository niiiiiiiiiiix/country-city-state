import { render, screen } from "@testing-library/react";
import App from "./App";

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
