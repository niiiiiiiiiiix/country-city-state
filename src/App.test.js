import { render } from "@testing-library/react";
import App from "./App";

test("renders Hello World text", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Hello World/);
  expect(element).toBeInTheDocument();
});
